import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    const ts = new Transform({
        transform(chunk, encoding, cb) {
            this.push(chunk.toString().split('').reverse().join(''));
            cb();
        }
    });
    process.stdin.pipe(ts).pipe(process.stdout);
};

await transform();