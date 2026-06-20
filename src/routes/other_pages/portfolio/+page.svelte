<header>

<form action="?/checktask" method="POST" use:enhance class="check-form">
</form>
    <nav class="cadre">
        <a href="/"><img class="logo" src="/images/logo.png" alt="logo_site_portfolio"></a>  
        <a href="../other_pages/cours" class="boutton">Cours</a>
        <a href="https://hyperplanning.univ-paris13.fr/2025-2026/invite" class="boutton">Hyperplanning</a>
        <a href="https://cas.univ-spn.fr/cas/login?service=https%3A%2F%2Fetudnotes.iutv.univ-paris13.fr%2Fservices%2FdoAuth.php%3Fhref%3Dhttps%253A%252F%252Fetudnotes.iutv.univ-paris13.fr%252F" class="boutton">Edunote</a>
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




</style>