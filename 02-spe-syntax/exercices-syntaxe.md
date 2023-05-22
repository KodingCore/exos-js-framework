# Exercices Syntaxe


## La décomposition

### Exercice 1 : La décomposition pour la permutation

Utiliser des tableaux et la décomposition pour permutter des valeurs.

```js

let a = 2;
let b = 3;

// inverser les valeurs de a et b

console.log(a);
console.log(b);

```

```js

let a = 2;
let b = 3;
let c = 4;

/*

Faire en sorte que :

a <- b
b <- c
c <- a

*/

console.log(a);
console.log(b);
console.log(c);

```


### Exercice 2 : la décomposition pour l'assignation

1. Calculez la moyenne de l'étudiant et modifier la valeur dans l'objet
2. Puis utilisez la décomposition pour créer les variables constantes `name`, `note` et `average` avec les valeurs de l'objet.

```js

const student = {
  name: "Alan",
  notes: [10, 16, 17],
  average: null,
};

// TODO ...

// constantes
console.log(name, notes, average);

```


### Exercice 3 : le décomposition pour récupérer des données

Utilisez une boucle et la décomposition pour afficher le nom de de chaque étudiant et le nom de sa soeur.

```js

const students = [
  {
    name: "Alan",
    family: {
      mother: "Yvette",
      father: "Paul",
      sister: "Sylvie",
    },
    age: 35,
  },
  {
    name: "Bernard",
    family: {
      mother: "Martine",
      father: "Cécile",
      sister: "Sophie",
    },
    age: 55,
  },
];

for(student of students) {
	 // ...
	 console.log(`${} is the sister of ${}`);
}

```

