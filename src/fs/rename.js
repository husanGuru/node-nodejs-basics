import { resolve } from 'path';
import { rename as fsRename } from 'fs/promises';
import customDirname from "../utils/dirname.js";
import { exists } from '../utils/files.js';

const rename = async () => {
    // Write your code here 
    const fileToRenamePath = resolve(customDirname(import.meta.url), 'files/wrongFilename.txt');
    const newFilePath = resolve(customDirname(import.meta.url), 'files/properFilename.md');

    const isFilesExists = await exists(fileToRenamePath);
    const isNewFileExists = await exists(newFilePath);

    if (!isFilesExists || isNewFileExists) {
        throw new Error('FS operation failed');
    }

    await fsRename(fileToRenamePath, newFilePath);

};

await rename();