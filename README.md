# 02 - Express _(views)_

- **Dates du cours :** 25 juillet 2025 et 28 juillet 2025
- **Objectifs :** Approfondissement de l'utilisation du framework Express, en instaurant un moteur de templating pour générer des vues HTML.

## Installation et exécution du code

1. Clonez le repository sur votre machine locale
2. Installez les dépendances avec la commande `npm install`
3. Exécutez le code avec la commande `npm run dev` _(script défini dans le fichier `package.json`)_

## Résumé du cours

### Vendredi 25 juillet 2025

Vendredi matin, nous avions consolidé notre application Express avec notamment l'utilisation d'un moteur de templating : EJS.

Un moteur de templating est un outil qui permet de générer du HTML à partir d'une syntaxe **non reconnue par les navigateurs**.  
Pour citer un exemple connu, Symfony _(framework PHP)_ utilise un moteur de templating nommé Twig.

De notre côté, nous avons choisi EJS qui a l'avantage d'être simple à comprendre et à utiliser, contrairement à d'autres syntaxes comme Pug.

Les moteurs de templating remplissent **le rôle de la vue** dans le design pattern **MVC** _(Model View Controller)_.

#### Syntaxe EJS

EJS ajoute trois syntaxes distinctes _(mais similaires)_ :

- `<% %>` permet d'ouvrir une "balise Javascript" à l'intérieur de la vue. Cette syntaxe permet l'exécution d'algo, comme des boucles, des conditions etc.
- `<%- %>` permet l'affichage d'un contenu Javascript _(variable ou retour de fonction)_ dans la vue.
- `<%= %>` fait la même chose que son voisin du dessus, mais en **échappant** le contenu.

**Échapper** le contenu signifie que l'on supprime les caractères spéciaux par des entités HTML.  
Par exemple : `<` sera transformé en `&lt;` dans le code.  
En finalité, le rendu visuel sera identique, mais sera uniquement considéré comme du simple texte.

> Mais alors, pourquoi vouloir échapper les caractères ?

Il y a une **faille de sécurité** qui répond au nom de "XSS" pour **Cross-Site Scripting**.  
Pour faire simple, il s'agit d'une pratique où un attaquant injecte du code malveillant _(dans un formulaire par exemple)_ qui sera ensuite exécuté sur le navigateur des autres utilisateurs.

Pour s'en protéger, on va privilégier plusieurs solutions :

- Ne pas utiliser la méthode `innerHTML` pour saisir le contenu d'un élément dans le DOM _(Javascript côté client)_
- Échapper les caractères en amont _(avant la sauvegarde dans la base de données par exemple)_

Nouvel exemple plus concret :

```ts
const element = document.getElementById("element");
const xss = "<script>alert('hacked');</script>";

// Aucune protection = Faille XSS
element.innerHTML = xss;
// => Exécute l'alerte dans le navigateur

// Avec innerText (ou textContent) = protection des failles XSS
element.innerText = xss;
// => Affichera "<script>alert('hacked');</script>" sous forme de texte, sans l'exécuter
```

#### Rendre des pages avec EJS

Dans nos contrôleurs, on a pour le moment uniquement utilisé deux méthodes pour transmettre une réponse :

- `response.json()` pour retourner une réponse au format JSON
- `response.send()` pour retourner une réponse avec un contenu textuel _(du HTML dans notre cas)_

Avant d'aller plus loin, il est nécessaire d'enregistrer EJS comme moteur de templating dans notre application Express, puis de définir le répertoire où l'on va stocker nos vues EJS.

```ts
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
```

L'enregistrement du moteur de templating EJS avec Express permet l'utilisation de la méthode `response.render()`, qui prend entre 1 et 2 arguments :

1. **Chemin et nom de la vue à rendre** : `pages/home`
2. **Variables à transmettre à la vue** : `{ title: "Page d'accueil" }`

Ce qui donne donc :

```ts
response.render("pages/home", { title: "Page d'accueil" });
```

#### Servir des assets

Déjà, qu'est-ce qu'on entend par "servir" et par "assets" ?

- **Servir :** Rendre disponible publiquement
- **Assets :** Ressources _(CSS, images, Javascript etc)_

Si on fusionner le tout en une phrase :

> "Rendre disponible publiquement les fichiers CSS, images, Javascript etc"

Pour faire ça, retour dans la [./index.ts](configuration de notre application Express) !

En plus de la ligne `app.use(Express.json());` qui permet de traiter le contenu du corps des requêtes entrantes au format JSON, on va ajouter une autre ligne `app.use`.

Ici, on va demander à Express de rendre **statiques** nos ressources _(= servir publiquement les ressources)_ qui se trouvent dans le répertoire `/public`.  
On va donc ajouter :

```ts
app.use(Express.static(path.join(__dirname, "public")));
```

Grâce à cette instruction, il nous sera possible d'importer tout le contenu du répertoire `/public` dans nos vues !

Par exemple, pour le fichier `/public/css/style.css`, on pourra faire :

```html
<link rel="stylesheet" href="/css/style.css" />
```

**Note :** Il ne faut pas préciser `/public` dans les imports !

### Lundi 28 juillet 2025

Maintenant que l'on a un serveur "prêt à l'emploi", il va falloir s'occuper de deux dernières choses :

- La transpilation Typescript vers Javascript
- La transpilation SCSS vers CSS

Pour le Typescript, on parle uniquement des fichiers à destination du navigateur. On ne va pas toucher aux fichiers Typescript qui sont exécutés côté serveur _(pour Express par exemple)_ !

#### "Transpilation, c'est quand on a chaud et qu'on est dyslexique ?"

Déjà : Merci Quentin pour cette phrase 😏
