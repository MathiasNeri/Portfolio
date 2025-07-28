# 🚀 Guide de déploiement sur GitHub Pages

## Prérequis
- Compte GitHub
- Git installé sur votre machine
- Node.js et npm installés

## Étapes de déploiement

### 1. Créer un repository GitHub
1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le `portfolio-ynov`
4. Laissez-le public
5. Ne cochez pas "Initialize this repository with a README"

### 2. Initialiser Git et pousser le code
```bash
# Dans le dossier portfolio-ynov
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-ynov.git
git push -u origin main
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Déployer sur GitHub Pages
```bash
npm run deploy
```

### 5. Configurer GitHub Pages
1. Allez dans votre repository sur GitHub
2. Cliquez sur "Settings"
3. Dans le menu de gauche, cliquez sur "Pages"
4. Dans "Source", sélectionnez "Deploy from a branch"
5. Choisissez la branche `gh-pages` et le dossier `/ (root)`
6. Cliquez sur "Save"

### 6. Votre site sera disponible à :
`https://VOTRE_USERNAME.github.io/portfolio-ynov/`

## Mise à jour du site
À chaque fois que vous modifiez votre code :
```bash
git add .
git commit -m "Description des changements"
git push origin main
npm run deploy
```

## Résolution de problèmes
- Si le site ne se charge pas, attendez 5-10 minutes
- Vérifiez que la branche `gh-pages` a été créée
- Assurez-vous que le repository est public 