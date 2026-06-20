import { createSession, generateSessionToken, google, setSessionTokenCookie } from "$lib/session";
import { supabase } from "$lib/supabase";
import { decodeIdToken } from "arctic";

export async function GET(event) {
    const code = event.url.searchParams.get("code");
    const state = event.url.searchParams.get("state");
    const storedState = event.cookies.get("google_oauth_state") ?? null;
    const codeVerifier = event.cookies.get("google_code_verifier") ?? null;

    if (!code || !state || !storedState || !codeVerifier) {
        return new Response(null, { status: 400 });
    }

    if (state !== storedState) {
        return new Response(null, { status: 400 });
    }

    let tokens;
    try {
        tokens = await google.validateAuthorizationCode(code, codeVerifier);
    } catch (e) {
        return new Response(null, { status: 400 });
    }

    const claims = decodeIdToken(tokens.idToken());
    const googleUserId = claims.sub;
    const username = claims.name;
    const email = claims.email;

    // Vérifier si l'utilisateur existe déjà
    const { data: existingUser } = await supabase
        .from("user")
        .select("*")
        .eq("google_id", googleUserId)
        .limit(1);

    if (existingUser && existingUser.length > 0) {
        const sessionToken = generateSessionToken();
        const session = await createSession(sessionToken, existingUser[0].id);
        setSessionTokenCookie(event, sessionToken, session.expiresAt);

        return new Response(null, {
            status: 302,
            headers: { Location: "/" }
        });
    }

    // Générer une API key
    function createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    const apikey = createRandomString(40);

    // Insérer l'utilisateur dans Supabase
    const { data: newUser, error: insertError } = await supabase
        .from("user")
        .insert([
            {
                google_id: googleUserId,
                email,
                username,
                apikey
            }
        ])
        .select()
        .single();

    if (insertError) {
        console.error("Erreur insertion user :", insertError);
        return new Response("Erreur serveur", { status: 500 });
    }

    // Créer la session
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, newUser.id);
    setSessionTokenCookie(event, sessionToken, session.expiresAt);

    return new Response(null, {
        status: 302,
        headers: { Location: "/" }
    });
}
