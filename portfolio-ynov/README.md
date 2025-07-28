# Portfolio Personnel - Votre Nom

Un portfolio moderne et impressionnant créé avec React, Tailwind CSS et Framer Motion pour présenter mes compétences de développeur.

## 🚀 Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **Responsive Design** - Mobile, tablette, desktop

## ✨ Fonctionnalités

- 🌙 **Dark Mode** - Basculement automatique jour/nuit
- 📱 **Responsive** - Optimisé pour tous les écrans
- 🎨 **Animations** - Transitions fluides avec Framer Motion
- ⚡ **Performance** - Chargement rapide avec Vite
- 🎯 **SEO** - Meta tags optimisés
- 📧 **Formulaire de contact** - Fonctionnel avec validation

## 📋 Sections du portfolio

1. **Hero Section** - Landing page avec animations
2. **À propos** - Parcours à Ynov et informations personnelles
3. **Projets** - 6 projets avec stack technique et liens
4. **Compétences** - Barres de progression et technologies
5. **Contact** - Formulaire et informations de contact
6. **Footer** - Liens sociaux et informations

## 🛠️ Installation et développement

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio-ynov.git
   cd portfolio-ynov
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer EmailJS (optionnel)**
   - Suivez le guide dans `EMAILJS_SETUP.md` pour rendre le formulaire de contact fonctionnel
   - Ou laissez le formulaire en mode simulation

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

### Scripts disponibles

```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Build pour la production
npm run preview      # Prévisualiser le build de production
npm run lint         # Linter le code (si configuré)
```

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez les fichiers suivants pour personnaliser vos informations :

- **Nom et titre** : `src/components/Hero.jsx` (ligne 58)
- **Informations de contact** : `src/components/Contact.jsx` (lignes 35-50)
- **Liens sociaux** : `src/components/Contact.jsx` (lignes 52-70)
- **Projets** : `src/components/Projects.jsx` (lignes 7-50)
- **Compétences** : `src/components/Skills.jsx` (lignes 12-35)

### 2. Couleurs et thème

Modifiez `tailwind.config.js` pour changer les couleurs principales :

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... autres nuances
    600: '#2563eb', // Couleur principale
  }
}
```

### 3. Ajouter votre photo

1. Placez votre photo dans `src/assets/`
2. Importez-la dans `src/components/About.jsx`
3. Remplacez le placeholder par votre image

### 4. Projets personnalisés

Modifiez le tableau `projects` dans `src/components/Projects.jsx` :

```javascript
const projects = [
  {
    id: 1,
    title: "Votre Projet",
    description: "Description de votre projet...",
    image: "🛒", // ou URL d'image
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/votre-username/projet",
    live: "https://votre-projet.com",
    category: "web"
  }
]
```

## 🚀 Déploiement

### Option 1 : GitHub Pages

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Configurer GitHub Pages**
   - Allez dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : gh-pages
   - Folder : / (root)

3. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Ajouter les scripts dans package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. **Déployer**
   ```bash
   npm run deploy
   ```

### Option 2 : Vercel (Recommandé)

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Déployer**
   ```bash
   vercel
   ```

3. **Ou connecter votre repo GitHub**
   - Allez sur [vercel.com](https://vercel.com)
   - Importez votre repository
   - Configuration automatique

### Option 3 : Netlify

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Déployer via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Ou via l'interface web**
   - Allez sur [netlify.com](https://netlify.com)
   - Drag & drop le dossier `dist`

## 📱 Optimisations

### Performance

- Images optimisées et compressées
- Lazy loading des composants
- Code splitting automatique avec Vite
- Animations optimisées avec Framer Motion

### SEO

- Meta tags complets
- Open Graph pour les réseaux sociaux
- Structure HTML sémantique
- URLs optimisées

### Accessibilité

- Navigation au clavier
- Contrastes respectés
- Alt text pour les images
- ARIA labels

## 🔧 Configuration avancée

### Variables d'environnement

Créez un fichier `.env` pour les variables sensibles :

```env
VITE_CONTACT_EMAIL=votre.email@example.com
VITE_GITHUB_URL=https://github.com/votre-username
VITE_LINKEDIN_URL=https://linkedin.com/in/votre-profile
```

### Analytics

Ajoutez Google Analytics ou autres outils de tracking dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : votre.email@example.com
- **LinkedIn** : [Votre Profile](https://linkedin.com/in/votre-profile)
- **GitHub** : [@votre-username](https://github.com/votre-username)

---

**Note** : N'oubliez pas de remplacer toutes les occurrences de "Votre Nom", "votre.email@example.com", etc. par vos vraies informations avant de déployer !
