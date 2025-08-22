# 🍲 Marm'ITADAKIMASU !


[**Marm'ITADAKIMASU** ](https://brief6marmitadakimasu-production.up.railway.app/) est une application web de recettes de cuisine développée selon l’architecture **MVC** (*Model-View-Controller*).  
L’application n’est **pas reliée à une base de données** : les données sont fixes et stockées dans le dossier `data/`.

---

## 🛠️ Technologies utilisées

### Front-end
- **HTML** généré dynamiquement grâce à **EJS**
- **JavaScript** & **CSS** pour les animations  
- 🎨 **Note particulière** :  
  - Le **bouton burger** a été entièrement retravaillé à la main, transformé en **spritesheet** et animé grâce à un *watcher* dans `index.js`.  
  - Les autres animations (moins léchées 😅) sont générées en **CSS** avec l’aide de ChatGPT.

### Back-end
- **Express.js**
- **TypeScript**  
- Utilisation de **TSX** pour la lecture et la compilation des fichiers `.ts`.

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) installé sur votre machine

---

## 🚀 Installation du projet

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/fraxi0n/BRIEF6_MarmItadakimasu
2. **Installer les dépendances**

   ```bash
   npm i

3. Lancer l’environnement de développement
(le watcher relance le serveur à chaque modification de fichier)



   ```bash
      npx --watch index.ts
     //ou
     npm run dev
## 👥 Auteurs

Estelle Haubois

François Brias

Special thanks 🙏 :

Quentin Derimais — README & déploiement


YATTAAAAA !