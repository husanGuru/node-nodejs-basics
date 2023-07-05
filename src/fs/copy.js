import { resolve } from 'path';
import { existsSync, mkdirSync, copyFileSync, readdir } from 'fs';
import customDirname from "../utils/dirname.js";
const copy = async () => {
    // Write your code here 
    const newFolderName = resolve(customDirname(import.meta.url), "files_copy");
    const folderPath = resolve(customDirname(import.meta.url), "files");

    if (!existsSync(folderPath)) {
        throw Error("FS operation failed");
    }
    if (existsSync(newFolderName)) {
        throw Error("FS operation failed");
    }
    mkdirSync(newFolderName);

    readdir(folderPath, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => copyFileSync(resolve(folderPath, file), resolve(newFolderName, file)));
        }
    });
};

await copy();
