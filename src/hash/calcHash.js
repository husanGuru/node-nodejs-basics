import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';
const calculateHash = async () => {
    // Write your code here 

    const hash = createHash('sha256');
    const filePath = resolve(import.meta.dirname, 'files/fileToCalculateHashFor.txt');
    const rs = createReadStream(filePath);

    rs.on('data', (data) => {
        hash.update(data);

    });
    rs.on('end', () => {
        console.log(hash.digest('hex'));
    });
};

await calculateHash();