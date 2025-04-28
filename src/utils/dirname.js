import { dirname } from "path";

import { fileURLToPath } from 'url';
const customDirname = (url) => dirname(fileURLToPath(url));
export default customDirname;
