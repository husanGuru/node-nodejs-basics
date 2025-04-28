import { stat } from 'fs/promises';
export async function exists(f) {
    try {
        await stat(f);
        return true;
    } catch {
        return false;
    }
}