import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export async function GET({ request, params }) {
    const apikey = request.headers.get("Api-Key");
    const id = params.id;

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

    // Récupérer la tâche
    const { data: listedestaches, error: taskError } = await supabase
        .from("liste_tache")
        .select("id_tache, nom_tache")
        .eq("user_id", userId)
        .eq("id_tache", id);

    if (taskError || listedestaches.length === 0) {
        return json(
            { message: "List Task does not exist." },
            { status: 404 }
        );
    }

    return json({
        message: "ok",
        listedestaches: listedestaches[0]
    });
}

export async function DELETE({ request, params }) {
    const apikey = request.headers.get("Api-Key");
    const id = params.id;

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

    // Supprimer la tâche
    await supabase
        .from("liste_tache")
        .delete()
        .eq("user_id", userId)
        .eq("id_tache", id);

    return json({
        message: "task deleted"
    });
}
