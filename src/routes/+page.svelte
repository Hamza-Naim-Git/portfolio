<script>
let {data} = $props();
console.log(data);
let {date}=data;
import { enhance } from '$app/forms';



</script>
<img class="logo" src="images/logo.png" alt="logo_site_portfolio">
 <!--<div class="content">
 <div class="menu_deroulant"><button class="boutton_menu_deroulant">&#9776</button></div> 
 </div>-->
 <div class="logout-container">
                <form action="?/logout" method="POST">
                <button type="submit" class="boutton-logout">
                    Se déconnecter
                </button>
            </form>
</div>
<div class="about_us">
    <a href="../other_pages/about_us" class="boutton_about">A propos du développeur</a>
</div>
<div class="barre">

    
    <nav class="cadre">
        <a href="../other_pages/cours" class="boutton">Cours</a>
        <a href="https://hyperplanning.univ-paris13.fr/2025-2026/invite" class="boutton">Hyperplanning</a>
        <a href="https://cas.univ-spn.fr/cas/login?service=https%3A%2F%2Fetudnotes.iutv.univ-paris13.fr%2Fservices%2FdoAuth.php%3Fhref%3Dhttps%253A%252F%252Fetudnotes.iutv.univ-paris13.fr%252F" class="boutton">Edunote</a>
        <a href="../other_pages/portfolio" class="boutton">Portfolio</a>
        <a href="../other_pages/todolist" class="boutton">Todo-list</a>
        

        <!--Déconnexion-->
        
    </nav>
</div>
<!--<p>Aujourd'hui nous sommes le {date}</p> à corriger --> 
<div class="intro">
<h2>Bienvenu sur Orion un site développer par un étudiant pour les étudiants.</h2>
<p class=text_intro >Se site et en plein développement et sert principalement de projet étudiant. Je voulais un projet il est un sens concret et ceux en lui donnant une utilité réel.<br>
C'est pourquoi je développe ce site dans l'optique qu'il soit un outil de référence pour les étudiants de l'université Sorbonne Paris Nord (et peut-être plus encore qui c'est &#x1F604;) </p>
</div>


<style>

 :root {
    --uspn-blue: #2b365a;
    --uspn-gold: #c5b299;      
    --uspn-gold-light: #e0d6c8; 
    --uspn-text-light: #ffffff;
    --uspn-bg-gray: #f4f4f4;    
}


.intro{
    border-radius: 10px;
    border: 2px solid #769cc3;
  
    position: relative;
    margin-top: 5%;
}
.text_intro{
    font-size: 18px;
    color: var(--uspn-blue);
    
}

.barre {
    position: relative;
    /*top: 50%;*/ 
    left: 30%; /* Réduit un peu à gauche pour mieux équilibrer si besoin */
    
    /* 1. ON FIXE UNE LARGEUR MAXIMUM POUR RACCOURCIR LE CÔTÉ DROIT */
    width: 35%; /* La barre prendra 65% de la largeur de l'écran au lieu de 100% */
    /* ou tu peux mettre une taille fixe en pixels, ex: max-width: 900px; */

    background-color: var(--uspn-blue);
    padding: 30px 40px; /* Légèrement réduit la hauteur (20px au lieu de 30px) pour affiner la capsule */
    border-radius: 50px;
    
    display: flex;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 20px;
    margin-bottom: 0;
}

/*.boutton_menu_deroulant{
    position: relative;
    top:-150px;
    left: 40px;
    padding: 8px 15px;
    background-color: var(--uspn-gold);
    border-radius: 5px;
    border-color: var(--uspn-gold);
}

.menu_deroulant{
    position:relative;
    top:10%;
    width: px 5px;
}

.content{
    display: none;
}



.menu_deroulant:hover .content{
    display: block;
    display: flex;
    flex-direction: column-reverse;
    top:62px;
    position: absolute;
    background-color: rgba(69, 68, 68, 1);
    padding: 2px 0px;
    border-radius: 5px;
}*/

.logo {
    position: relative;
    width: 300px; 
    margin-right: 20%;
    margin-top: 5%;
    border-radius: 20px;
    border-color: white;;
    border: solid;
    left: 40%;
    
}

.checked {
    text-decoration: line-through;
    opacity: 0.6;
}

/* Pousse tout ce qui suit à droite */
.logout-container {
    margin-left: auto; 
    position: relative;
}

.about_us{
    margin-left: auto; 
    position: relative;
}


/* Style spécifique pour le bouton de déconnexion dans la nav */
.boutton-logout {
    background-color: var(--uspn-gold-light);
    color: var(--uspn-blue);
    border: 1px solid var(--uspn-gold);
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    position: relative;
    top:-180px;
    left:20px;
}

.boutton_about{
    background-color: var(--uspn-gold-light);
    color: var(--uspn-blue);
    border: 1px solid var(--uspn-gold);
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    position: relative;
    top:-160px;
    left:20px;
    text-decoration: none;
}

.boutton-logout:hover {
    background-color: var(--uspn-gold);
    color: var(--uspn-blue);
}

/*le cadre prend toute la largeur */
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
    position: relative;
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