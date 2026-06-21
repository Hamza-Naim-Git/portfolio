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
    <section class="portfolio-section">
    <h2 class="portfolio-title">Projets Universitaires</h2>
    <p class="portfolio-subtitle">Découvrez certains de mes projets effectués durant mes années de BUT Informatique :</p>

    <div class="projects-grid">
        <article class="project-card">
            <div class="project-content">
                <h3 class="project-name">Find Word</h3>
                <p class="project-description">
                    Find Word est un jeu conçu en Java à utiliser dans un terminal. Le but du jeu est de trouver un mot secret de 5 lettres, tiré au hasard parmi une liste de 1000 mots en moins de 6 essais.<br>
                    Durant ce projet avec mon binôme nous avons développé plusieurs classe tels que Word qui gère la logique métier, Game qui sert d’arbitre en validant les propositions du joueurs WordRepository <br>
                    qui sert à piocher un mot dans la liste JSON. <br>Ce projet m’a permis de me perfectionner sur plusieurs points notamment mes compétences en Java, comme constituer un diagramme UML, optimiser les classes entre elles et m’exercer au niveau du clean code. Mais aussi de tirer de nombreux bénéfices comme Une meilleure gestion des imprévus. En effet durant cette SAE plusieurs événements inattendus sont survenus comme comme par exemple: une compréhension tardive du sujet ce qui à entraîner une refonte des classes. La capacité à prendre des décisions et les justifiées, en effet cette SAE étant moins guidée que d'autre, cela nous a permis d’apprendre à faire des choix selon les critères du cahier des charges mais aussi et surtout à les justifier afin de prendre les meilleures décisions possible.

                </p>
                <div class="project-tags">
                    <span>Java</span>
                    <span>UML</span>
                    <span>Clean Code</span>
                </div>
            </div>
            <div class="project-image-container">
                <img src="/images/Capture _find_word.png" alt="Aperçu Find Word" class="project-image-fd" />
            </div>
        </article>

        <article class="project-card inverted"> <div class="project-content">
                <h3 class="project-name">Création de Dashboard - Brigade Criminelle</h3>
                <p class="project-description">
                    Ce projet consiste à l’exploitation et la valorisation d’une base de données d’une Brigade Anti-Criminalité. L’objectif est de transformer un volume important brut de donnée stockée dans une base de donnée en indicateurs visuellement simple et dynamique permettant son exploitation plus rapide pour des décideur ou des personnel de terrain.
                    La mise en place de ce support visuel permet ainsi de combler le fossé entre des personnes initiées au SQL et des personnes qui qui ne possèdent pas forcément cette compétence et ce en traduisant ces modèle de donnée complexe par des dashboard plus simple à lire et permettant de comprendre instantanément les tendances criminels exemple. 
                    Ce projet me permet de mettre diverses de mes compétences en avant. Parmi les plus importantes d’entre, je peux citer ma capacité à mettre en place une base de données fonctionnel pour une organisation possédant des données sensible telles que la BAC mais aussi son exploitation à destination de professionnel leurs permettant ainsi une prise de connaissances plus rapide de l’information par l’intermédiaire de la création de dashboard mais aussi ma capacité à mettre en lien des outils informatique afin de répondre à un besoin selon un cahier des charges.
                    Au-delà de l’aspect technique, ce projet m'a permis de mettre en avant mon  autonomie du fait de prendre des décision de les justifier à partir de critère et objectif précis et ma capacité à restituer.

                </p>
                <div class="project-tags">
                    <span>SQL</span>
                    <span>Dashboard</span>
                    <span>Data Analysis</span>
                </div>
            </div>
            <div class="project-image-container">
                <img src="/images/Capture d'écran 2026-06-21 100131.png" alt="Aperçu Dashboard" class="project-image-dash-bord" />
            </div>
        </article>

        <article class="project-card">
            <div class="project-content">
                <h3 class="project-name">Orion</h3>
                <p class="project-description">
                   Orion est le site sur lequel vous êtes actuellement. Ce site est en plein développement et sert principalement de projet étudiant. Je voulais un projet qui ait un sens concret et qui lui donne une utilité réelle. C'est pourquoi je développe ce site dans l'optique qu'il soit un outil de référence pour les étudiants de l'université Sorbonne Paris Nord (et peut-être plus encore, qui sait ? 😄). Pour l'instant, les fonctionnalités sont la mise à disposition d’une to-do list, un répertoire permettant de sauvegarder des sites mais aussi des liens vers les cours d’étudiants comme, par exemple, des Google Docs.
                </p>
                <div class="project-tags">
                    <span>SvelteKit</span>
                    <span>Supabase</span>
                    <span>OAuth Google</span>
                </div>
            </div>
            <div class="project-image-container">
                <img src="/images/logo.png" alt="Aperçu Orion" class="project-image-orion" />
            </div>
        </article>
    </div>
</section>





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

/* Section Principale */
.portfolio-section {
    width: 100%;
    max-width: 1100px;
    margin: 50px auto;
    padding: 0 20px;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

.portfolio-title {
    color: #24345d; /* Ton bleu Orion */
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
}

.portfolio-subtitle {
    color: #556582;
    font-size: 16px;
    text-align: center;
    margin-bottom: 40px;
}

/* Grille des projets */
.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 40px; /* Espace entre les projets */
}

/* Carte de projet */
.project-card {
    display: flex;
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(36, 52, 93, 0.08); /* Ombre douce avec ton bleu */
    border: 1px solid rgba(36, 52, 93, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Effet au survol d'un projet */
.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(36, 52, 93, 0.15);
}

/* Alternance de disposition (Texte à gauche / Image à droite, et vice-versa) */
.project-card.inverted {
    flex-direction: row-reverse;
}

/* Partie Texte */
.project-content {
    flex: 1;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-name {
    color: #24345d;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 15px 0;
}

.project-description {
    color: #4a5568;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Badges / Tags de compétences technologiques */
.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.project-tags span {
    background-color: rgba(36, 52, 93, 0.08); /* Bleu Orion très transparent */
    color: #24345d;
    padding: 6px 14px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
}

/* Partie Image */
.project-image-container {
    flex: 1;
    min-height: 250px;
    background-color: #f7fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.project-image-fd {
    width: 100%;
    height: 25%;
    object-fit: cover; /* L'image remplit proprement son espace sans se déformer */
    transition: scale 0.5s ease;
}

.project-image-orion {
    width: 100%;
    height: 25%;
    object-fit: cover; /* L'image remplit proprement son espace sans se déformer */
    transition: scale 0.5s ease;
}

.project-card:hover .project-image {
    scale: 1.03; /* Léger zoom de l'image au survol */
}

/* 📱 Responsive : Mode Mobile / Tablette */
@media (max-width: 768px) {
    .project-card, .project-card.inverted {
        flex-direction: column-reverse; /* L'image passe au-dessus du texte sur mobile */
    }
    
    .project-content {
        padding: 20px;
    }
    
    .project-image-container {
        min-height: 180px;
    }
    
    .portfolio-title {
        font-size: 26px;
    }
}



</style>