const parseArgs = () => {
    // Write your code here 
    let result = [];

    for (let i = 0; i < process.argv.length; i++) {
        let arg = process.argv[i];
        if (arg.startsWith('--')) {
            result.push(`${arg.slice(2)} is ${process.argv[i + 1]}`);
        }
    }

    console.log(result.join(', '));
};

parseArgs();