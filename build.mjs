import { execa } from 'execa';
import { exit, kill } from 'process';

const commands = ['node ./.output/server/index.mjs', 'node ./generate-pdf.mjs'];

const opt = {
  stdin: 'inherit',
  stdout: 'inherit',
  stderr: 'inherit',
};

await execa('npx nuxt build', [], opt);

await Promise.race(commands.map((cmd) => execa(cmd, [], opt)));

console.log('finish')

exit(1)