import Database from "better-sqlite3";

const connection = new Database('site.db');

// Création de la table

connection.exec(`

CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY NOT NULL,
    google_id TEXT NOT NULL,
    email TEXT NOT NULL,
    username TEXT NULL,
    apikey TEXT 
);

CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES user(id),
    expires_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS liste_tache (
    id_tache INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_tache TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user(id),
    status INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS liste_site (
    id_site INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_site TEXT NOT NULL,
    url TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS liste_cours (
    id_cours INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_cours TEXT NOT NULL,
    url TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user(id)
)


`);
