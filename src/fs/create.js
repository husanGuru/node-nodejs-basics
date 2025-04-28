import { resolve } from "path";
import { open, writeFile, stat } from 'fs/promises';
import customDirname from "../utils/dirname.js";
import { exists } from "../utils/files.js";


const create = async () => {
    // Write your code here 
    const filePath = resolve(customDirname(import.meta.url), 'files/fresh.txt');

    let isFileExists = await exists(filePath);
    if (isFileExists) {
        throw new Error('FS operation failed');
    }

    await writeFile(filePath, 'I am fresh and young');
};



await create();