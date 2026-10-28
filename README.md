# arx-portfolio

[Français](#français) · [English](#english)

---

## Français

Portfolio public d'**Arx Systema** (Louis Rouanet, développeur web et intégrateur IA, L'Étang-la-Ville, Yvelines). Site statique, léger, mobile d'abord, aux couleurs d'Arx (bleu nuit `#1F3D7A`, jaune `#E8A820`).

### Contenu

- Six fiches de réalisations : Lelly Mosaïque, Au Paradis O'Fer, Fondation Vuillard Roussel, IdeoPulse, Auto-Star, arx-systema.fr. Chaque fiche donne le besoin, le travail fait, les technologies, le résultat, le lien vers le site et le lien vers sa page légale, avec la citation exacte qui mentionne Arx Systema.
- Un bloc « Outils Arx » : serveur MCP public ([mcp-relances-postgres](https://github.com/Louis75011/mcp-relances-postgres)), CRM Supabase et n8n, bot Telegram.

### Choix techniques

HTML, CSS et JavaScript sans framework ni étape de build : une seule page, aucune dépendance, publication possible sur n'importe quel hébergement statique. Astro n'apporterait rien ici (une page, pas de contenu à générer en série).

```
index.html
assets/
  css/style.css     styles, mobile d'abord
  js/main.js        menu mobile et année du pied de page
  img/favicon.svg
```

### Aperçu en local

```bash
cd arx-portfolio
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

### Licence

Le code (HTML, CSS, JavaScript) est publié sous licence [MIT](LICENSE). Les noms, marques et contenus des clients cités appartiennent à leurs propriétaires et ne sont pas couverts par cette licence.

### Contact

Louis Rouanet — [arx-systema.fr](https://arx-systema.fr) — louis.rouanet@arx-systema.fr

---

## English

Public portfolio of **Arx Systema** (Louis Rouanet, web developer and AI integrator, L'Étang-la-Ville, near Paris). A lightweight, mobile-first static site in Arx colours (night blue `#1F3D7A`, yellow `#E8A820`).

### Contents

- Six case studies: Lelly Mosaïque, Au Paradis O'Fer, Fondation Vuillard Roussel, IdeoPulse, Auto-Star, arx-systema.fr. Each one covers the need, the work done, the technologies, the outcome, a link to the live site and a link to its legal page, with the exact quote crediting Arx Systema.
- An "Arx tools" block: public MCP server ([mcp-relances-postgres](https://github.com/Louis75011/mcp-relances-postgres)), Supabase and n8n CRM, Telegram bot.

### Technical choices

Plain HTML, CSS and JavaScript with no framework and no build step: one page, no dependencies, deployable on any static host. Astro would add nothing here (a single page, no content to generate in bulk).

```
index.html
assets/
  css/style.css     styles, mobile first
  js/main.js        mobile menu and footer year
  img/favicon.svg
```

### Local preview

```bash
cd arx-portfolio
python3 -m http.server 8080
# then open http://localhost:8080
```

### License

The code (HTML, CSS, JavaScript) is released under the [MIT](LICENSE) license. Client names, trademarks and content belong to their owners and are not covered by this license.

### Contact

Louis Rouanet — [arx-systema.fr](https://arx-systema.fr) — louis.rouanet@arx-systema.fr
