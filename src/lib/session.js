import { sha256 } from "@oslojs/crypto/sha2";
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { supabase } from "$lib/supabase";
import { Google } from "arctic";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";

// -----------------------------
// 1) Génération du token
// -----------------------------
export function generateSessionToken() {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    return encodeBase32LowerCaseNoPadding(bytes);
}

// -----------------------------
// 2) Création d'une session
// -----------------------------
export async function createSession(token, userId) {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 jours

    const { error } = await supabase
        .from("session")
        .insert([
            {
                id: sessionId,
                user_id: userId,
                expires_at: Math.floor(expiresAt.getTime() / 1000)
            }
        ]);

    if (error) {
        console.error("Erreur création session :", error);
    }

    return {
        id: sessionId,
        userId,
        expiresAt
    };
}

// -----------------------------
// 3) Validation du token
// -----------------------------
export async function validateSessionToken(token) {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

    const { data: rows, error } = await supabase
        .from("session")
        .select(`
            id,
            user_id,
            expires_at,
            user:user_id ( id )
        `)
        .eq("id", sessionId)
        .limit(1);

    if (error || !rows || rows.length === 0) {
        return { session: null, user: null };
    }

    const row = rows[0];

    const session = {
        id: row.id,
        userId: row.user_id,
        expiresAt: new Date(row.expires_at * 1000)
    };

    const user = {
        id: row.user.id
    };

    // Expirée ?
    if (Date.now() >= session.expiresAt.getTime()) {
        await invalidateSession(session.id);
        return { session: null, user: null };
    }

    return { session, user };
}

// -----------------------------
// 4) Invalidation d'une session
// -----------------------------
export async function invalidateSession(sessionId) {
    await supabase.from("session").delete().eq("id", sessionId);
}

// -----------------------------
// 5) Invalidation de toutes les sessions d'un user
// -----------------------------
export async function invalidateAllSessions(userId) {
    await supabase.from("session").delete().eq("user_id", userId);
}

// -----------------------------
// 6) Cookies
// -----------------------------
export function setSessionTokenCookie(event, token, expiresAt) {
    event.cookies.set("session", token, {
        httpOnly: true,
        sameSite: "lax",
        expires: expiresAt,
        path: "/"
    });
}

export function deleteSessionTokenCookie(event) {
    event.cookies.set("session", "", {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 0,
        path: "/"
    });
}

// -----------------------------
// 7) Google OAuth
// -----------------------------
export const google = new Google(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    "https://orion-681r1v7x3-zendosnaim-7096s-projects.vercel.app/login/google/callback"

);
/*1:09:34*/