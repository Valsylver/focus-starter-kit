const configBuilder = require('webpack-focus').configBuilder;
const path = require('path');

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 8080;
const HEROKU_API = JSON.parse(process.env.HEROKU_API);

// Check if focus libraries should be held locally or read from NPM
const localFocus = process.env.LOCAL_FOCUS ? JSON.parse(process.env.LOCAL_FOCUS) : false;

const customConfig = localFocus ? {
    resolve: {
        alias: {
            'focus-core': path.resolve(process.cwd(), '../focus-core'),
            'focus-components': path.resolve(process.cwd(), '../focus-components'),
            moment: path.resolve(process.cwd(), './node_modules/moment'),
            numeral: path.resolve(process.cwd(), './node_modules/numeral'),
            react: path.resolve(process.cwd(), './node_modules/react')
        }
    }
} : {};

const globals = {
    __API_ROOT__: JSON.stringify(HEROKU_API ? 'focus-demo-api.herokuapp.com' : `${API_HOST}:${API_PORT}/`)
}

module.exports = configBuilder(customConfig, globals);
