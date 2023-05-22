# Exercices POO en JS

## Exercice 1 :

Objectif : Créer une classe et plusieurs instances différentes de cette classe.

Vous allez créer deux fichiers :

- `index.js`
- `pizza.js`

Dans le fichier `pizza.js` vour allez décrire puis exporter une classe `Pizza`.

Une `Pizza` a 4 attributs :

- un `name`
- un `ingredient1`
- un `ingredient2`
- un `ingredient3`

Elle a un constructeur qui doit recevoir ces 4 attributs.

Elle a également des getters et setters pour chacun de ces attributs.

Dans votre fichier `index.js` vous allez importer la classe `Pizza`.

Instanciez 3 instances de la classe `Pizza` :

- La Veggie
	- tomate
	- fromage
	- légumes

- La Meattie
	- tomate
	- fromage
	- viande

- La Fishie
	- tomate
	- fromage
	- poisson

Faites des `console.log()` pour vérifier que tout fonctionne.

## Exercice 2 :

Objectif : manipuler l'héritage.

Nous allons créer 4 fichiers :

- `index.js`
- `character.js`
- `mage.js`
- `warrior.js`

La classe `Character` va représenter les personnages.
Un `Character` a 2 attributs : 

- un `name`
- un `healthPoints`

La classe `Warrior` va représenter les guerriers.
Un `Warrior` hérite de la classe `Character` et a en plus un attribut :

- un `strength`

La classe `Mage` va représenter les mages.
Un `Mage` hérite de la classe `Character` et a en plus un attribut :

- un `manaPoints`

Les 3 classes ont des getters et setters pour tous leurs attributs, et leurs constucteurs recoivent tous leurs attributs (et ceux de leur classe mère).

Dans les fichiers `warrior.js` et `mage.js` vous allez importer la classe `Character`.

Dans le fichier `index.js` vous allez importer les classes `Warrior` et `Mage`.

Dans votre `index.js` vous allez créer un `Mage` et un `Warrior`.

Les mages ont par défaut 50 `healthPoints` et 50 `manaPoints`. Les guerriers ont par défaut 60 `healthPoints` et 10 `strength`.

Faites des `console.log()` pour vérifier que tout fonctionne.