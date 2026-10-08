import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = fileURLToPath(new URL('../', import.meta.url));
const version = JSON.parse(readFileSync(join(root, 'manifest.json'), 'utf8')).version;
function sources(dir) { return readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? sources(join(dir, entry.name)) : entry.name.endsWith('.js') ? [join(dir, entry.name)] : []); }
const files = [join(root, 'index.js'), ...sources(join(root, 'src'))];
let imports = 0;
for (const file of files) for (const match of readFileSync(file, 'utf8').matchAll(/from\s+['"](\.{1,2}\/[^'"]+\.js)(\?v=[^'"]*)?['"]/g)) {
    imports++;
    assert.equal(match[2], `?v=${version}`, `version mismatch in ${file}: ${match[1]}`);
    assert.ok(existsSync(resolve(dirname(file), match[1])), `missing installed asset: ${match[1]}`);
}
const bundle = readFileSync(join(root, 'dist/silly-canvas-ui.js'), 'utf8');
assert.ok(bundle.includes('mountCanvas'), 'canvas mount is exported');
assert.ok(!/\bfrom\s*['"]|\bimport\s*\(|\bimport\s*['"]/.test(bundle), 'compiled UI has no runtime imports or CDN dependency');
assert.ok(!/extensionSettings|chatMetadata|function emissionCounts|function compile\(/.test(bundle), 'domain state and compiler remain outside the UI bundle');
assert.ok(existsSync(join(root, 'THIRD_PARTY_NOTICES.md')), 'bundled runtime license accompanies the extension');
console.log(`Assets verified: ${imports} versioned local imports; self-contained Svelte UI; one native domain module graph.`);
