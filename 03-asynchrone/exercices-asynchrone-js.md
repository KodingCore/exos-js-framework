# Exercices Asynchrone en JS

## Exercice 1 : setTimeout

Utilisez `Math.random` (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random) pour générer 3 nombres entre 100 et 500.

Appelez `setTimeout` en utilisant le premier nombre, à la fin du timer faites un `console.log` de ce nombre puis appelez `setTimeout` avec le second nombre et affichez le second nombre à la fin de son timer puis appelez `setTimeout` à la fin du troisième et affichez le troisième nombre à la fin de son timer.


## Exercice 2 : Promise

Créez une Promise qui prend deux nombres et divise le premier par le second puis renvoie le résultat. Si le second nombre est egal à 0 vous devez renvoyer une erreur.

Si la Promise est résolue avec succès affichez le résultat de la division avec une précision de deux chiffres après la virgule. Si c'est un echec affichez `Cannot divide by 0` sur la console d'erreur.


## Exercice 3 : Promise.all

Utilisez la Promise de l'exercice 2 mais cette fois utilisez `Promise.all` pour afficher le résultat de 3 divisions différentes sous le format suivant : 

```js

console.log(`${} / ${} = ${}`);

```


## Exercice 4 : async/await

Créez une Promise qui additionne deux nombres er retourne la somme. Créez ensuite une fonction async qui utilisera le retour de cette Promise pour calculer la moyenne de 3 nombres.

Affichez la moyenne avec le format suivant :

```js

console.log(`The average of ${}, ${} and ${} is ${}`);

```


## Exercice 5 : async/await et retour

Créez une fonction qui permet de parcourir le tableau des étudiants, calcul leur moyenne et la modifie. Réutilisez le plus possible le code de votre Exercice 4.

```js

let students = [
	{
		name : "Mike",
		notes : [12, 14, 8],
		average : null,
	},
	{
		name : "Julie",
		notes : [17, 12, 15],
		average : null,
	},
	{
		name : "Charlie",
		notes : [13, 12, 11],
		average : null,
	},
];

```


## Exercice 6 : fetch

Utilisez fetch pour récupérer les utilisateurs avec le endpoint d'API https://jsonplaceholder.typicode.com/users (la réponse comme le nom de l'API l'indique est en JSON) et placez chaque adresse mail dans un tableau. Faites enfin un `console.log` de ce tableau.


## Exercice 7 : fetch et html

Créez un fichier `index.html` avec le contenu suivant : 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 7 : Fetch et HTML</title>
</head>

<body>
    <h1>Todos</h1>
    <ul id="todos">
    </ul>
    <button id="addToDo">Ajouter une Todo</button>
    <script></script>
</body>

</html>

```

Utilisez fetch pour récupérer les 5 premières todos à l'URL suivante : https://jsonplaceholder.typicode.com/todos.

Faites en sorte que lorsque l'on clique sur le bouton `Ajouter une ToDo`, vous affichiez la prochaine ToDo de votre liste, dans un élément `li` dans votre HTML après 400 ms d'attente.

Une fois que vous avez affiché les 5, le prochain clic sur le bouton affichera une `alert()` qui dit "Nothing more to do".
