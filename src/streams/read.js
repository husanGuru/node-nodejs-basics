import { resolve } from 'path';
import { createReadStream } from 'fs';
const read = async () => {
    // Write your code here 

    const filePath = resolve(import.meta.dirname, 'files/fileToRead.txt');
    const rs = createReadStream(filePath);

    rs.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    rs.on('error', (err) => {
        console.log('Error reading file:', err.message);
    });

    rs.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();