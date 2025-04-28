import { resolve } from 'path';
import customDirname from '../utils/dirname.js';
import { exists } from '../utils/files.js';
import { unlink } from 'fs/promises';

const remove = async () => {
    // Write your code here 
    const fileToRemove = resolve(customDirname(import.meta.url), 'files/fileToRemove.txt');

    const isFilesExists = await exists(fileToRemove);

    if (!isFilesExists) {
        throw new Error('FS operation failed');
    }

    await unlink(fileToRemove);
};

await remove();