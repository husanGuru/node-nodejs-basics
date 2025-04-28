import { resolve } from 'path';
import { mkdir, cp } from 'fs/promises';
import customDirname from '../utils/dirname.js';
import { exists } from '../utils/files.js';

const copy = async () => {
    // Write your code here 
    const filesToCopyPath = resolve(customDirname(import.meta.url), 'files');

    const newPath = resolve(customDirname(import.meta.url), 'files_copy');

    const isFilesExists = await exists(filesToCopyPath);
    const isNewPathExists = await exists(newPath);


    if (!isFilesExists || isNewPathExists) {
        throw new Error('FS operation failed');

    }


    await mkdir(newPath);
    await cp(filesToCopyPath, newPath, { recursive: true });




};

await copy();
