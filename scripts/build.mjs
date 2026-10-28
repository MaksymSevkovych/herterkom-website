import { build } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

await build();

// Jede Seite lässt sich auch auf einem einfachen statischen Webserver direkt öffnen.
const routes = ['ueberuns', 'leistungen', 'karriere', 'kontakt', 'ersatzteillager', 'impressum', 'datenschutzerklaerung'];
const html = await readFile('dist/index.html', 'utf8');
await Promise.all(routes.map(async (route) => {
  const directory = path.join('dist', route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
}));
console.log(`✓ ${routes.length + 1} direkt aufrufbare Seiten erstellt.`);
