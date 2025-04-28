import { spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', [path.resolve(import.meta.dirname, 'files/script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    // connect master process stdin to child process stdin
    process.stdin.pipe(child.stdin);

    // connect child process stdout to master process stdout
    child.stdout.pipe(process.stdout);

    child.on('error', (err) => {
       console.log(err);
    });

    child.on('exit', (code) => {
       console.log('exit error: ', code);
       
    });
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess(  ['someArgument1', 'someArgument2'] );
