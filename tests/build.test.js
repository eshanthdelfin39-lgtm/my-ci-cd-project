const assert = require('node:assert/strict');
const { readFile } = require('node:fs/promises');
const test = require('node:test');

test('build output contains the page and its runtime assets', async () => {
  const [html, css, javascript] = await Promise.all([
    readFile('dist/index.html', 'utf8'),
    readFile('dist/styles.css', 'utf8'),
    readFile('dist/app.js', 'utf8'),
  ]);

  assert.match(html, /<title>Deployment Lab<\/title>/);
  assert.match(html, /\.\/styles\.css/);
  assert.match(html, /\.\/app\.js/);
  assert.match(css, /\.release-board/);
  assert.match(javascript, /All checks passed/);
});