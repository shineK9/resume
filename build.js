const { spawn } = require('child_process');

const commands = ['node ./.output/server/index.mjs', 'node ./generate-pdf.js'];

const opt = {
  stdin: 'inherit',
  stdout: 'inherit',
  stderr: 'inherit',
};

console.log('ENV:', process.env)

async function run() {
  const build = spawn('nuxi build', { shell: true });
  build.on('error', (e) => console.log(e.message));
  build.stdout.on('data', (e) => console.log(e.toString()));
  build.stderr.on('data', (e) => console.log(e.toString()));

  build.on('exit', () => {
    const server = spawn('nuxi preview', { shell: true });
    const pdfGen = spawn('node ./generate-pdf.js', { shell: true });

    server.stdout.on('data', (e) => console.log(e.toString()));
    server.stderr.on('data', (e) => console.log(e.toString()));
    pdfGen.stdout.on('data', (e) => console.log(e.toString()));
    pdfGen.stderr.on('data', (e) => console.log(e.toString()));

    pdfGen.on('exit', () => {
      console.log('finish');
      server.kill('SIGINT');
    });
  });
}

run();
