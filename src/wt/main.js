import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
const performCalculations = async () => {
    // Write your code here
    const coresNumber = os.cpus().length;
    const workers = [];

    for (let i = 0; i < coresNumber; i++) {
        workers.push(new Promise((resolve) => {
            const worker = new Worker(path.resolve(import.meta.dirname, 'worker.js'));

            worker.postMessage(10 + i);

            worker.on('message', (message) => {
                resolve({ status: 'resolved', data: message });
            });

            worker.on('error', (err) => {
                resolve({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });
        }));
    }

    const results = await Promise.all(workers);
    console.log(results);
};

await performCalculations();