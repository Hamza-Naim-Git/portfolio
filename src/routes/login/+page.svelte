<div class="welcome-container">
    <h1>Bienvenue sur Orion</h1>
    
    <a href="/login/google" class="google-btn">
        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google logo" class="google-icon">
        Se connecter avec Google
    </a>
</div>

<style>

/* Conteneur principal centré */
:global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
}

.welcome-container {
    text-align: center;
    background: white;
    padding: 3.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-top: 6px solid #2b365a; /* Bleu Orion */
    max-width: 400px;
    width: 90%;
}

h1 {
    color: #2b365a;
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    font-family: 'Segoe UI', sans-serif;
}

/* Style du bouton Google */
.google-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    background-color: white;
    color: #3c4043; /* Gris foncé Google */
    border: 1px solid #dadce0;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.2s ease;
    font-family: 'Roboto', arial, sans-serif;
}

/* Style de l'icône Google */
.google-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
}

.google-btn:hover {
    background-color: #f8f9fa;
    border-color: #c5b299; /* Or Orion au survol */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.google-btn:active {
    background-color: #eeeeee;
    transform: scale(0.98);
}

</style>