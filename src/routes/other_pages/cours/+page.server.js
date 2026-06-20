import { deleteSessionTokenCookie, invalidateSession } from "$lib/session";
import { fail, redirect } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export async function load({ locals }) {
    if (!locals.user) {
        redirect(302, "/login");
    }

    // Récupérer l'utilisateur
    const { data: users, error: userError } = await supabase
        .from("user")
        .select("*")
        .eq("id", locals.user.id)
        .single();

    if (userError || !users) {
        redirect(302, "/login");
    }

    // Récupérer les cours
    const { data: listedescours, error: coursError } = await supabase
        .from("liste_cours")
        .select("*")
        .eq("user_id", locals.user.id);

    return {
        apikey: users.apikey,
        cours: listedescours ?? []
    };
}

export const actions = {
    createcours: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(302, "/login");
        }

        const formulaire = await request.formData();
        const url = formulaire.get("url");
        const nom_cours = formulaire.get("nom_cours");

        await supabase
            .from("liste_cours")
            .insert([{ nom_cours, url, user_id: locals.user.id }]);
    },

    deletecours: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(302, "/login");
        }

        const formulaire = await request.formData();
        const idcours = formulaire.get("id_cours");

        await supabase
            .from("liste_cours")
            .delete()
            .eq("id_cours", idcours)
            .eq("user_id", locals.user.id);
    },

    logout: async (event) => {
        if (event.locals.session === null) {
            return fail(401);
        }

        await invalidateSession(event.locals.session.id);
        deleteSessionTokenCookie(event);

        return redirect(302, "/login");
    }
};
