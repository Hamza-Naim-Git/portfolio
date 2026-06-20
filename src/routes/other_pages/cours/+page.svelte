<script>
let {data} = $props();
console.log(data);
let {cours}=data;
import { enhance } from '$app/forms';


</script>

<header>
    <nav class="cadre">
        <a href="/"><img class="logo" src="/images/logo.png" alt="logo_site_portfolio"></a>       
        <a href="https://hyperplanning.univ-paris13.fr/2025-2026/invite" class="boutton">Hyperplanning</a>
        <a href="https://cas.univ-spn.fr/cas/login?service=https%3A%2F%2Fetudnotes.iutv.univ-paris13.fr%2Fservices%2FdoAuth.php%3Fhref%3Dhttps%253A%252F%252Fetudnotes.iutv.univ-paris13.fr%252F" class="boutton">Edunote</a>
        <a href="../other_pages/portfolio" class="boutton">Portfolio</a>
        <a href="../other_pages/todolist" class="boutton">Todo-list</a>
        <a href="../other_pages/about_us" class="boutton">A propos du développeur</a>
        <div class="logout-container">
            <form action="?/logout" method="POST">
                <button type="submit" class="boutton-logout">
                    Se déconnecter
                </button>
            </form>
        </div>
    </nav>
</header>

    <div class="anne_1">
    <h1> 1er Année:</h1>
        <form action="?/createcours" method="POST" class="form-ajout">
        <input type="text" name="url" class="champ_saisie" placeholder="URL">
        <input type="text" name="nom_cours" class="champ_saisie" placeholder="Nom du cours">
        <button class="valide" type="submit">Ajouter</button>
    </form>
        <div class="liste">
        {#each cours as item }
            <div class="element_liste_cours">
                <p><a href={item.url} target="_blank">{item.nom_cours}</a></p>

                <form action="?/deletecours" method="POST">
                    <input type="hidden" name="id_cours" value={item.id_cours}>
                    <button class="boutton_liste" type="submit">X</button>
                </form>     
            </div>
        {/each}
    </div>
    </div>
 
        
        

<style>
 :root {
    --uspn-blue: #2b365a;       /* Le bleu profond du header */
    --uspn-gold: #c5b299;       /* Le beige/or des boutons actifs */
    --uspn-gold-light: #e0d6c8; /* Version plus claire pour le hover */
    --uspn-text-light: #ffffff;
    --uspn-bg-gray: #f4f4f4;    /* Gris très clair pour le fond de page */
}

.logo {
    width: 180px; /* Plus large comme sur le site */
    margin-right: 20px;
    border-radius: 20px;
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
 
.element_liste_cours {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
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

.champ_saisie  {
    flex-grow: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.champ_saisie:focus {
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
/* Pousse tout ce qui suit à droite */
.logout-container {
    margin-left: auto; 
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
</style>