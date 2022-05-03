import { execa } from 'execa';

const commands = ['node ./.output/server/index.mjs', 'node ./generate-pdf.mjs'];

const opt = {
  stdin: 'inherit',
  stdout: 'inherit',
  stderr: 'inherit',
};

await Promise.all(commands.map((cmd) => execa(cmd, [], opt)));
