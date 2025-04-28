import { createWriteStream } from 'fs';
import { resolve } from 'path';
const write = async () => {
    // Write your code here
    const filePath = resolve(import.meta.dirname, 'files/fileToWrite.txt');
    const ws = createWriteStream(filePath);

    process.stdin.pipe(ws);

};

await write();