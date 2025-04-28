import { resolve } from 'path';
import customDirname from '../utils/dirname.js';
import { exists } from '../utils/files.js';
import { readFile } from 'fs/promises';

const read = async () => {
    // Write your code here 
    const filePath = resolve(customDirname(import.meta.url), 'files/fileToRead.txt');

    const isFileExists = await exists(filePath);

    if (!isFileExists) {
        throw new Error('FS operation failed');
    }

    let res = await readFile(filePath, { encoding: 'utf-8' });
    console.log(res);

};

await read();