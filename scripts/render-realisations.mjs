// Renders data/realisations.json into index.html, between the realisations markers.
// Static output keeps the page readable without JavaScript.
//   node scripts/render-realisations.mjs           rewrite index.html
//   node scripts/render-realisations.mjs --check   exit 1 if index.html is out of date
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = join(root, 'data', 'realisations.json');
const pagePath = join(root, 'index.html');

const START = '<!-- realisations:start -->';
const END = '<!-- realisations:end -->';
const INDENT = '          ';

const esc = (value) =>
  String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const attr = (value) => esc(value).replaceAll('"', '&quot;');

function renderCard(item) {
  const chips = item.technologies.map((tech) => `<li>${esc(tech)}</li>`).join('');
  return [
    `<article class="card" id="${attr(item.id)}">`,
    `  <header>`,
    `    <h3>${esc(item.titre)}</h3>`,
    `    <p class="tag">${esc(item.secteur)}</p>`,
    `  </header>`,
    `  <dl>`,
    `    <dt>Besoin</dt>`,
    `    <dd>${esc(item.besoin)}</dd>`,
    `    <dt>Travail fait</dt>`,
    `    <dd>${esc(item.travail)}</dd>`,
    `    <dt>Technologies</dt>`,
    `    <dd><ul class="chips">${chips}</ul></dd>`,
    `    <dt>Résultat</dt>`,
    `    <dd>${esc(item.resultat)}</dd>`,
    `  </dl>`,
    `  <blockquote class="cite">`,
    `    <p>« ${esc(item.citation_mentions)} »</p>`,
    `    <footer>${esc(item.source_citation)}</footer>`,
    `  </blockquote>`,
    `  <p class="links">`,
    `    <a href="${attr(item.url)}" rel="noopener">Voir le site</a>`,
    `    <a href="${attr(item.url_mentions)}" rel="noopener">${esc(item.libelle_mentions)}</a>`,
    `  </p>`,
    `</article>`,
  ]
    .map((line, index) => (index === 0 ? line : INDENT + line))
    .join('\n');
}

const { realisations } = JSON.parse(readFileSync(dataPath, 'utf8'));
const block = [
  START,
  '',
  ...realisations.flatMap((item) => [INDENT + renderCard(item), '']),
  INDENT.slice(2) + END,
].join('\n');

const page = readFileSync(pagePath, 'utf8');
const startAt = page.indexOf(START);
const endAt = page.indexOf(END);
if (startAt === -1 || endAt === -1) {
  console.error('Markers not found in index.html');
  process.exit(1);
}

const lineStart = page.lastIndexOf('\n', startAt) + 1;
const next = page.slice(0, lineStart) + INDENT.slice(2) + block + page.slice(endAt + END.length);

if (process.argv.includes('--check')) {
  if (next !== page) {
    console.error('index.html is out of date: run node scripts/render-realisations.mjs');
    process.exit(1);
  }
  console.log('index.html matches data/realisations.json');
} else {
  writeFileSync(pagePath, next);
  console.log(`${realisations.length} fiches rendered`);
}
