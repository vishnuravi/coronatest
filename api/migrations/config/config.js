module.exports = {
    development: {
        username: 'root',
        password: 'root',
        database: 'corona',
        host: 'localhost',
        port: '5432',
        migrationStorageTableName: '_migrations',
        dialect: 'postgres',
        define: {
            freezeTableName: true,
            underscored: true
        }
    },
};
