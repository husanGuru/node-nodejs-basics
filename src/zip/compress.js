import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream';
import zlib from 'zlib';
const compress = async () => {
    // Write your code here 
    const filePath = resolve(import.meta.dirname, 'files/fileToCompress.txt');
    const archivePath = resolve(import.meta.dirname, 'files/archive.gz');
    const rs = createReadStream(filePath);
    const ws = createWriteStream(archivePath);

    rs.pipe(zlib.createGzip()).pipe(ws).on('error', (err) => {
        console.log(err);
    });
};

await compress();