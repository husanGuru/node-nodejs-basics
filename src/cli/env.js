const parseEnv = () => {
    // Write your code here 
    let rssEnvVars = Object.entries(process.env).filter(env => env[0].startsWith('RSS_'));
    const result = rssEnvVars.map(envVar => `${envVar[0]}=${envVar[1]}`).join('; ');

    console.log(result);

};

parseEnv();