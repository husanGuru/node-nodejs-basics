import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream';
import zlib from 'zlib';
const decompress = async () => {
    // Write your code here 
    const filePath = resolve(import.meta.dirname, 'files/fileToCompress.txt'); //change decompressed file name to see it's working
    const archivePath = resolve(import.meta.dirname, 'files/archive.gz');
    const rs = createReadStream(archivePath);
    const ws = createWriteStream(filePath);

    rs.pipe(zlib.createGunzip()).pipe(ws).on('error', (err) => {
        console.log(err);
    });
};

await decompress();