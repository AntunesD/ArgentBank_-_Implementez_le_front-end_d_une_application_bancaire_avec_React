# Argent Bank - Implémentez le front-end d'une application bancaire avec React

## Description

Argent Bank est un projet réalisé dans le cadre du parcours de formation d'un étudiant chez OpenClassrooms. Le but est de transformer un site web d'une banque fictive en une application React, en utilisant également le state manager Redux pour gérer l'état global de l'application.

## Objectifs du Projet

Les principaux objectifs de ce projet sont les suivants :

- Créer une application web React pour l'authentification des utilisateurs.
- Utiliser Redux pour gérer l'état global de l'application.
- Permettre aux utilisateurs de se connecter, de visualiser leur profil, de se déconnecter et de gérer leur profil.
- Intégrer des bonnes pratiques de Green Code, notamment l'optimisation des images et la création de composants réutilisables.

## Compétences visées

Ce projet vise à développer les compétences suivantes :

- Afficher les données du backend sur l'interface via des appels API.
- Configurer des routes API pour la communication client/serveur.
- Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front.


## Auteur

Ce projet est réalisé par Antunes David.


## Installation

### Prérequis

Argent Bank utilise la pile technologique suivante :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Assurez-vous d'avoir les bonnes versions et téléchargez les deux packages. Vous pouvez vérifier cela en utilisant les commandes suivantes dans votre terminal :

```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de Mongo
mongo --version
```

### Instructions

**Instructions d'installation :**

1. Clonez ce référentiel sur votre ordinateur en utilisant la commande :
   ```
   git clone https://github.com/AntunesD/ArgentBank_-_Implementez_le_front-end_d_une_application_bancaire_avec_React.git
   ```

2. Ouvrez une fenêtre de terminal dans le projet cloné.
3. Exécutez les commandes suivantes :

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement local
npm run dev:server

# Remplir la base de données avec deux utilisateurs
npm run populate-db
```

Votre serveur devrait maintenant être en cours d'exécution à l'adresse http://locahost:3001 et vous avez désormais deux utilisateurs dans votre base de données MongoDB !

## Données de la Base de Données Pré-remplies

Une fois que vous exécutez le script `populate-db`, vous devriez avoir deux utilisateurs dans votre base de données :

### Tony Stark

- Prénom : `Tony`
- Nom : `Stark`
- Email : `tony@stark.com`
- Mot de passe : `password123`

### Steve Rogers

- Prénom : `Steve`
- Nom : `Rogers`
- Email : `steve@rogers.com`
- Mot de passe : `password456`

## Documentation de l'API

Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs
