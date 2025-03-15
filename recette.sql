CREATE TABLE employe (
    matricule VARCHAR(255) PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    fonction VARCHAR(255) NOT NULL,
    type_employe VARCHAR(255) NOT NULL
);

CREATE TABLE admin (
    matricule VARCHAR(50) PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL
);

CREATE TABLE gerer (
    matricule_employe VARCHAR(255),
    matricule_admin VARCHAR(255),
    PRIMARY KEY (matricule_admin,matricule_employe),
    date_creation DATE
);

CREATE TABLE recette (
    id_recette SERIAL PRIMARY KEY,
    nature VARCHAR(255) NOT NULL,
    libelle VARCHAR(255) NOT NULL,
    montant FLOAT NOT NULL,
    periodicite VARCHAR(50) NOT NULL,
    matricule VARCHAR(50) NOT NULL,
    FOREIGN KEY (matricule) references admin(matricule) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE emplacement (
    id_emplacement VARCHAR(255) primary key,
    latitude VARCHAR(255),
    longitude VARCHAR(255)
);

CREATE TABLE contribuable (
    cin VARCHAR(12) PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    photo BYTEA,
    date_naissance date NOT NULL,
    id_compte VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_compte) references compte(id_compte) ON UPDATE CASCADE ON DELETE CASCADE
);
  
CREATE TABLE compte (
    id_compte VARCHAR(50) primary key,
    mdp VARCHAR(50) NOT NULL
);

CREATE TABLE attribuer (
    matricule_employe VARCHAR(255),
    id_recette INT,
    cin VARCHAR(12),
    id_payement VARCHAR(255),
    date_attribution DATE NOT NULL,
    PRIMARY KEY(matricule_employe,id_recette,cin),
    FOREIGN KEY (id_payement) references payement(id_payement) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE affecter (
    matricule_employe VARCHAR(255),
    id_recette INT,
    cin VARCHAR(12),
    id_emplacement VARCHAR(255),
    PRIMARY KEY(matricule_employe,id_recette,cin,id_emplacement)
);

CREATE TABLE payement (
    id_payement SERIAL PRIMARY KEY,
    date_payement DATE NOT NULL
);

CREATE TABLE mobile_money(
    ref VARCHAR(255) NOT NULL,
    operateur VARCHAR(50) NOT NULL
) INHERITS (payement);

CREATE TABLE espece (
    somme_paye FLOAT NOT NULL,
    reste FLOAT NOT NULL
) INHERITS (payement);


