CREATE TABLE equipe (
	id int NOT NULL AUTO_INCREMENT,
	nom varchar(50) NOT NULL UNIQUE,
	quartier varchar(50) NOT NULL,
	PRIMARY KEY(id)
);
-- CRÉATION de la table joueur qui réfère à équipe
CREATE TABLE joueur (
	id int NOT NULL AUTO_INCREMENT,
	prenom varchar(50) NOT NULL,
	nomFamille varchar(50) NOT NULL,
	numero tinyint,
	dateNaissance date,
	idEquipe int NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idEquipe) references equipe(id) ON DELETE SET NULL
	-- 1:N avec equipe
);	

INSERT into equipe(nom, quartier) VALUES 
				("Canadiens", "Verdun"), 
				("Rangers", "Hochelaga"),
				("Red Wings", "Plateau");

INSERT into joueur(prenom, nomFamille, numero, idEquipe) VALUES
				("Mathieu", "Plante", 13, 1),
				("Marc-André", "Charpentier", 10, 1),
				("Valérie", "Tremblay", 3, 2);
				

-- LA CLÉ ÉTRANGÈRE EST TOUJOURS DU CÔTÉ 0,1 ou 1,1 DE LA RELATION 1:N