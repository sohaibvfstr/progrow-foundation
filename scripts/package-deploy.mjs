import { access, mkdtemp, readdir, rename, rm } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const buildDirectory = path.join(projectRoot, 'dist');
const output = path.join(projectRoot, 'serverbyte-upload.zip');

await access(path.join(buildDirectory, 'index.html'), constants.R_OK);
await access(path.join(buildDirectory, '.htaccess'), constants.R_OK);
const files = await readdir(buildDirectory);
if (!files.includes('assets')) {
  throw new Error('The production assets are missing. Run npm run build first.');
}

// Stage outside the build directory so an existing ZIP is never packaged inside itself.
const stagingDirectory = await mkdtemp(path.join(projectRoot, '.progrow-deploy-'));
const stagedArchive = path.join(stagingDirectory, 'serverbyte-upload.zip');
try {
  const result = spawnSync('zip', [
    '-q', '-r', stagedArchive, '.',
    '-x', '*.DS_Store', '__MACOSX/*', '*.map',
  ], { cwd: buildDirectory, stdio: 'inherit' });
  if (result.error) {
    throw new Error('Install the zip command, or compress the contents of dist manually, including .htaccess.', { cause: result.error });
  }
  if (result.status !== 0) {
    throw new Error(`Creating the upload archive failed (zip exit ${result.status}).`);
  }
  await rename(stagedArchive, output);
  console.log('Ready: serverbyte-upload.zip');
  console.log('Extract its contents directly into the domain document root (usually public_html).');
} finally {
  await rm(stagingDirectory, { recursive: true, force: true });
}
