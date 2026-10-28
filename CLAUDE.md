# arx-portfolio — contexte projet

Portfolio public d'Arx Systema (ARX-195). Site statique : `index.html`, `assets/css/style.css`, `assets/js/main.js`. Pas de build, pas de dépendance.

- Couleurs : bleu nuit `#1F3D7A`, jaune `#E8A820` (le jaune seul sur fond clair manque de contraste : l'utiliser sur le bleu ou en liseré).
- Mobile d'abord ; styles de base pour petit écran, `min-width` pour le reste.
- Code et commentaires en anglais ; contenu du site et README en français (README aussi en anglais).
- Chaque citation de fiche vient d'une vérification faite sur le site du client le 28/10/2026 : à revérifier avant de la modifier.
- Aperçu : `python3 -m http.server 8080`.
- Git : `git aa` / `git cm "msg"` / `git ps`. Dépôt GitHub public sous `Louis75011` et publication : seulement après validation de Louis, étape par étape.
- Fiches : source unique `data/realisations.json` ; `index.html` en est généré (`node scripts/render-realisations.mjs`, `--check` pour vérifier). Ne pas éditer les cartes à la main entre les repères `realisations:*`.
