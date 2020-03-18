module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    sessionSecret: process.env.SESSION_SECRET,
    postgres: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        readReplicaHost: process.env.DB_READ_REPLICA_HOST
    },
    apiToken: process.env.API_TOKEN
};
