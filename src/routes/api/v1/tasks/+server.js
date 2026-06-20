import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export async function GET({ request }) {
    const apikey = request.headers.get("Api-Key");

    if (!apikey) {
        return json({ message: "Unauthorized" }, { status: 401 });
    }

    // Vérifier l'utilisateur via Supabase
    const { data: users, error: userError } = await supabase
        .from("user")
        .select("id")
        .eq("apikey", apikey);

    if (userError || users.length === 0) {
        return json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = users[0].id;

    // Récupérer les tâches
    const { data: listedestaches, error: taskError } = await supabase
        .from("liste_tache")
        .select("id_tache, nom_tache")
        .eq("user_id", userId);

    if (taskError) {
        return json({ message: "Erreur serveur" }, { status: 500 });
    }

    return json({
        message: "ok",
        listedestaches
    });
}

export async function POST({ request }) {
    const apikey = request.headers.get("Api-Key");
    const body = await request.json();
    const name = body.name;

    if (!apikey) {
        return json({ message: "Unauthorized" }, { status: 401 });
    }

    // Vérifier l'utilisateur
    const { data: users, error: userError } = await supabase
        .from("user")
        .select("id")
        .eq("apikey", apikey);

    if (userError || users.length === 0) {
        return json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = users[0].id;

    // Insérer la tâche
    const { data, error } = await supabase
        .from("liste_tache")
        .insert([{ nom_tache: name, user_id: userId }])
        .select()
        .single();

    if (error) {
        return json({ message: "Erreur serveur" }, { status: 500 });
    }

    return json({
        message: "ok",
        listedestaches: {
            id: data.id_tache,
            name
        }
    });
}
