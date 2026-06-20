import { deleteSessionTokenCookie, invalidateSession } from "$lib/session";
import { fail, redirect } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export async function load({ locals }) {
    if (!locals.user) {
        redirect(302, "/login");
    }

    const userId = locals.user.id;

    const { data: users } = await supabase
        .from("user")
        .select("*")
        .eq("id", userId)
        .single();

    const { data: listedessites } = await supabase
        .from("liste_site")
        .select("*")
        .eq("user_id", userId);

    const date = new Date().getDate();

    const { data: listedestaches } = await supabase
    .from("liste_tache")
    .select("*")
    .eq("user_id", userId)
    .order("deadline", { ascending: true });


    return {
        tache: listedestaches ?? [],
        apikey: users?.apikey,
        site: listedessites ?? [],
        date
    };
}

export const actions = {
    createitem: async ({ request, locals }) => {
    if (!locals.user) redirect(302, "/login");

    const formulaire = await request.formData();
    const nomtache = formulaire.get("tache");
    const deadline = formulaire.get("deadline"); // <-- IMPORTANT

    await supabase
        .from("liste_tache")
        .insert([
            { 
                nom_tache: nomtache, 
                user_id: locals.user.id, 
                status: 0,
                deadline: deadline // <-- AJOUT ICI
            }
        ]);
},


    checktask: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        const status = data.get("status");

        const newStatus = status === null ? 0 : Number(status);

        await supabase
            .from("liste_tache")
            .update({ status: newStatus })
            .eq("id_tache", id);

        return { success: true };
    },

    deleteitem: async ({ request, locals }) => {
        if (!locals.user) redirect(302, "/login");

        const formulaire = await request.formData();
        const idtache = formulaire.get("id");

        await supabase
            .from("liste_tache")
            .delete()
            .eq("id_tache", idtache)
            .eq("user_id", locals.user.id);
    },

    createsite: async ({ request, locals }) => {
        if (!locals.user) redirect(302, "/login");

        const formulaire = await request.formData();
        const url = formulaire.get("url");
        const nom_site = formulaire.get("nom_site");

        await supabase
            .from("liste_site")
            .insert([{ nom_site, url, user_id: locals.user.id }]);
    },

    deletesite: async ({ request, locals }) => {
        if (!locals.user) redirect(302, "/login");

        const formulaire = await request.formData();
        const idsite = formulaire.get("id_site");

        await supabase
            .from("liste_site")
            .delete()
            .eq("id_site", idsite)
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
