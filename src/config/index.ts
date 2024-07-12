const env = import.meta.env;

const config = { serverUrl: env.PROD ? env.VITE_URL : env.VITE_SERVER_URL };

export default config;
