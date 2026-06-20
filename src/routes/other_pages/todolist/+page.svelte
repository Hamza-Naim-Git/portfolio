<script>
    let { data } = $props();
let { tache, site, date } = data;

    function daysLeft(deadline) {
        if (!deadline) return "—";

        const now = new Date();
        const end = new Date(deadline);
        const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));

        if (diff < 0) return `⛔ En retard (${Math.abs(diff)}j)`;
        if (diff === 0) return "🔥 Aujourd’hui";
        if (diff === 1) return "⚠️ Demain";
        return `⏳ J-${diff}`;
    }
</script>


<header>

<form action="?/checktask" method="POST" use:enhance class="check-form">
</form>
    <nav class="cadre">
        <a href="/"><img class="logo" src="/images/logo.png" alt="logo_site_portfolio"></a>
        
        <a href="../other_pages/cours" class="boutton">Cours</a>
        <a href="https://hyperplanning.univ-paris13.fr/2025-2026/invite" class="boutton">Hyperplanning</a>
        <a href="https://cas.univ-spn.fr/cas/login?service=https%3A%2F%2Fetudnotes.iutv.univ-paris13.fr%2Fservices%2FdoAuth.php%3Fhref%3Dhttps%253A%252F%252Fetudnotes.iutv.univ-paris13.fr%252F" class="boutton">Edunote</a>
        <a href="../other_pages/portfolio" class="boutton">Portfolio</a>
        <a href="../other_pages/about_us" class="boutton">A propos du développeur</a>
        <!--Déconnexion-->
        <div class="logout-container">
            <form action="?/logout" method="POST">
                <button type="submit" class="boutton-logout">
                    Se déconnecter
                </button>
            </form>
        </div>
    </nav>
</header>

<div class="main-content">
    <h1>Liste Tâche</h1>
    
    <div class="liste">
    {#each tache as item}
        <div class="element_liste_pense_bete">
    <form action="?/checktask" method="POST" use:enhance class="check-form">
        <input type="hidden" name="id" value={item.id_tache}>

        <input 
            type="checkbox" 
            name="status" 
            value={item.status === 1 ? "0" : "1"} 
            checked={item.status === 1} 
            onchange={(e) => e.currentTarget.form.submit()}
        >

        <span class:checked={item.status === 1}>
            {item.nom_tache}
        </span>
    </form>

    <!-- Affichage deadline -->
    <div class="deadline">
        {daysLeft(item.deadline)}
    </div>

    <form action="?/deleteitem" method="POST">
        <input type="hidden" name="id" value={item.id_tache}>
        <button class="boutton_liste" type="submit">X</button>
    </form>
</div>

    {/each}
    </div>

    <form action="?/createitem" method="POST" class="form-ajout">
    <input type="text" name="tache" id="text_pense_bete" placeholder="Nouvelle tâche...">
    <input type="date" name="deadline" class="champ_saisie">
    <button class="valide" type="submit">Ajouter</button>
    </form>


    <hr>

    <h1>Liste Site</h1>

    <div class="liste">
        {#each site as item }
            <div class="element_liste_site">
                <p><a href={item.url} target="_blank">{item.nom_site}</a></p>

                <form action="?/deletesite" method="POST">
                    <input type="hidden" name="id_site" value={item.id_site}>
                    <button class="boutton_liste" type="submit">X</button>
                </form>     
            </div>
        {/each}
    </div>

    <form action="?/createsite" method="POST" class="form-ajout">
        <input type="text" name="url" class="champ_saisie" placeholder="URL du site">
        <input type="text" name="nom_site" class="champ_saisie" placeholder="Nom du site">
        <button class="valide" type="submit">Ajouter</button>
    </form>

    <hr>
</div>


<!--Creer un fichier indépendent pour css -->

<style>
    
 :root {
    --uspn-blue: #2b365a;       /* Le bleu profond du header */
    --uspn-gold: #c5b299;       /* Le beige/or des boutons actifs */
    --uspn-gold-light: #e0d6c8; /* Version plus claire pour le hover */
    --uspn-text-light: #ffffff;
    --uspn-bg-gray: #f4f4f4;    /* Gris très clair pour le fond de page */
}


/*.content{
    display: none;
}
.icon_user:hover .content{
    display: block;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    width: 100px;
}*/

.logo {
    width: 180px; /* Plus large comme sur le site */
    margin-right: 20px;
    border-radius: 20px;
}

.checked {
    text-decoration: line-through;
    opacity: 0.6;
}

/* Pousse tout ce qui suit à droite */
.logout-container {
    margin-left: auto; 
}

/*deadline*/
.deadline {
    font-size: 0.9rem;
    font-weight: bold;
    color: #555;
    margin-right: 15px;
}


/* Style spécifique pour le bouton de déconnexion dans la nav */
.boutton-logout {
    background-color: transparent;
    color: var(--uspn-text-light);
    border: 1px solid var(--uspn-gold);
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.boutton-logout:hover {
    background-color: var(--uspn-gold);
    color: var(--uspn-blue);
}

/* On s'assure que le cadre prend toute la largeur */
.cadre {
    display: flex;
    align-items: center;
    width: 100%;
}

/* Style Global */
:global(body) {
    font-family: 'Open Sans', sans-serif;
    background-color: var(--uspn-bg-gray);
    color: #333;
    margin: 0;
    padding: 0;
}

/* --- Navigation & Header --- */
header {
    background-color: var(--uspn-blue);
    padding: 20px 40px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.cadre {
    display: flex;
    align-items: center;
    gap: 15px; /* Espacement automatique */
}



/* Boutons de navigation */
.boutton {
    color: var(--uspn-text-light);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 4px;
    transition: background 0.3s ease;
}

.boutton:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--uspn-gold);
}

/* --- Sections de contenu --- */
.main-content {
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
}

h1 {
    color: var(--uspn-blue);
    border-left: 5px solid var(--uspn-gold);
    padding-left: 15px;
    margin-bottom: 30px;
}

.liste {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
    margin-bottom: 20px;
}

/* Items de liste */
.element_liste_pense_bete, 
.element_liste_site {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
}

.element_liste_pense_bete:last-child {
    border-bottom: none;
}

/* Bouton supprimer (X) */
.boutton_liste {
    background-color: #e74c3c; /* Rouge pour la suppression */
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* --- Formulaires & Champs --- */
.form-ajout {
    display: flex;
    gap: 10px;
    margin-bottom: 40px;
}

.champ_saisie, #text_pense_bete {
    flex-grow: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.champ_saisie:focus, #text_pense_bete:focus {
    border-color: var(--uspn-blue);
    box-shadow: 0 0 0 3px rgba(43, 54, 90, 0.1);
}

/* Bouton Valider style "Or" */
.valide {
    background-color: var(--uspn-gold);
    color: var(--uspn-blue);
    border: none;
    padding: 10px 25px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.valide:hover {
    background-color: var(--uspn-gold-light);
}

/* API Key style technique */
/*.api-display {
    background: var(--uspn-blue);
    color: var(--uspn-gold);
    padding: 15px;
    border-radius: 8px;
    display: inline-block;
    font-family: monospace;
} */


</style>