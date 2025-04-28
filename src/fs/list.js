import { resolve } from 'path';
import customDirname from '../utils/dirname.js';
import { exists } from '../utils/files.js';
import { readdir } from 'fs/promises';

const list = async () => {
    // Write your code here 

    const folderPath = resolve(customDirname(import.meta.url), 'files');

    const isFolderExists = await exists(folderPath);

    if (!isFolderExists) {
        throw new Error('FS operation failed');
    }

    let res = await readdir(folderPath);
    console.log(res);
};

await list();