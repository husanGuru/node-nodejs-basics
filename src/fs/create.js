import { dirname, resolve } from "path";
import { existsSync, writeFile } from "fs";

import { fileURLToPath } from 'url';
import customDirname from "../utils/dirname.js";


const create = async () => {
    // Write your code here 
    const fileName = resolve(customDirname(import.meta.url), "./files", "fresh.txt");
    let text = "I am fresh and young";


    if (!existsSync(fileName)) {
        writeFile(fileName, text, (err) => {
            if (err) {
                console.log(err);
            }
        });
        return;
    } else {
        throw Error("FS operation failed");
    }


    // if (open()) {
    //     fs;
    // }
};

await create();
