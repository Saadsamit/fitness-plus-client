const env = import.meta.env;

const config = { serverUrl: env.VITE_SERVER_URL };
console.log(config);

export default config;
