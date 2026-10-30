const { cp, mkdir, rm } = require('node:fs/promises');

async function build() {
  await rm('dist', { recursive: true, force: true });
  await mkdir('dist', { recursive: true });
  await cp('src', 'dist', { recursive: true });
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});