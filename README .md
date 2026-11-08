# 🛒 AUCHAN : Plateforme e-commerce

Application web dynamique, modulaire et responsive pour le Centre Commercial AUCHAN.
Projet réalisé en **JavaScript Vanilla ES6+** et **Tailwind CSS**, sans framework.



## ✨ Fonctionnalités

### Interface client
-  Chargement du catalogue via **Fetch** depuis `data/data.json`
- **Persistance** du catalogue et du panier dans le `localStorage` (restaurés après actualisation)
-  **Recherche** instantanée par nom
-  **Filtre** par catégorie (Vêtements, Électronique)
-  **Pagination** dynamique
-  Bascule d'affichage **Grille / Liste** (classes Tailwind)
-  **Panier** : ajout, détection des doublons, modification des quantités, suppression, total dynamique
-  Tri (prix croissant / décroissant, nom A-Z)
-  Choix du nombre de produits par page (4 / 8 / 12)
-  **Drag & Drop** d'un produit vers le panier
-  Tarification par taille (M +5 %, L +10 %, XL +20 %)
- Formulaire « Contactez-nous » avec validations **Regex**
-  Bouton « Générer des données de test » (API RandomUser)

### Back-office (extra)
-Ajout, affichage, modification et suppression de produits (CRUD)
-Synchronisation immédiate avec le `localStorage` et le catalogue client

### Bonus
-Mode Dark / Light (`dark:` de Tailwind)
-  Génération d'un devis au format PDF

---

## 🧰 Technologies

| Domaine | Outils |
|---|---|
| Structure et style | HTML5, CSS3, Tailwind CSS |
| Logique | JavaScript Vanilla ES6+ (modules, arrow functions, destructuring, spread) |
| Données | Fetch API, JSON, `localStorage` |
| Versionnement | Git / GitHub |
| Déploiement | Vercel / GitHub Pages |
| Gestion de projet | Jira / GitHub Projects |

---

## 📁 Structure du projet

```
auchan/
├── index.html            # Structure principale de la page
├── data/
│   └── data.json         # Catalogue initial (12 produits)
├── css/
│   ├── style.css         # Configuration Tailwind (source)
│   └── output.css        # CSS généré par Tailwind
├── assets/
│   └── pictures/         # Images des produits et logo
└── js/
    ├── main.js           # Point d'entrée : état, initialisation, événements
    ├── api.js            # Récupération des données (Fetch)
    ├── products.js       # Logique métier : recherche, filtre, pagination
    ├── cart.js           # Logique du panier : ajout, doublons, quantités, totaux
    ├── storage.js        # Lecture / écriture dans le localStorage (JSON.stringify / parse)
    ├── ui.js             # Manipulation du DOM : cartes, pagination, vue Grille/Liste, panier
    ├── dragDrop.js       # Événements de glisser-déposer (à venir)
    └── validation.js     # Vérifications Regex du formulaire (à venir)
```

### Rôle des modules

- **`api.js`** : charge le catalogue avec `fetch` et gère les erreurs HTTP.
- **`storage.js`** : sérialise (`JSON.stringify`) et désérialise (`JSON.parse`) les produits et le panier.
- **`products.js`** : fonctions pures (`searchproduct`, `filterByCategory`, `getTotalPages`, `paginate`) basées sur `filter()`, `slice()` et `Math.ceil()`.
- **`cart.js`** : fonctions pures (`addToCart`, `updateQuantity`, `removeFromCart`, `getTotal`, `getCount`) basées sur `some()`, `map()`, `filter()` et `reduce()`.
- **`ui.js`** : seule couche qui touche au DOM (rendu des cartes, de la pagination et du panier).
- **`main.js`** : garde l'**état** de l'application (`state`), branche les événements et appelle les autres modules.



---

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```bash
git clone <url-du-depot>
cd auchan
```

### 2. Installer Tailwind CSS

```bash
npm install
```

### 3. Générer le CSS

```bash
npx tailwindcss -i ./css/style.css -o ./css/output.css --watch
```

### 4. Lancer le site

Les modules ES et `fetch` nécessitent un serveur local : ouvrir `index.html` avec **Live Server** (VS Code), puis aller sur `http://127.0.0.1:5500`.

---

## 🧠 Choix techniques

- **Un seul objet `state`** (recherche, catégorie, page, vue) : à chaque changement, la fonction `update()` recalcule la liste affichée et redessine l'interface.
- **Pipeline de données** : `recherche → filtre → pagination → rendu`.
- **Fonctions pures** pour la logique métier : elles renvoient de nouveaux tableaux sans modifier les originaux.
- **Délégation d'événements** sur la pagination, la liste des produits et le panier : un seul écouteur par zone, même quand le HTML est régénéré.
- **Persistance** : le catalogue est lu depuis le `localStorage` en priorité, `data.json` n'est chargé qu'à la première visite.
- **Approche Mobile-First** avec les classes utilitaires de Tailwind (`sm:`, `md:`, `lg:`).

---

## 🌿 Workflow Git

| Branche | Rôle |
|---|---|
| `main` | Version stable |
| `develop` | Branche d'intégration |
| `feature/*` | Une branche par fonctionnalité (`feature/filtres`, `feature/pagination`, `feature/panier`, `feature/drag-drop`...) |


**Convention de commits (Conventional Commits) :**

```
feat: ajout de la pagination
fix: correction du doublon dans le panier
style: mise en forme de la vue liste
docs: ajout du README
```

---

## 👤 Auteure

**Chaymaa**
