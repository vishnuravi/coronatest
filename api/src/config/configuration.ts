export default () => {
    let config;
    
    if (process.env.NODE_ENV === 'production') {
        config = require('./production.js');
    } else {
        config = require('./default.js');
    }

    return config;
};
