import {
    document,
    jQuery,
    window
} from './browser.js';

module.exports = (interceptor) => {
    let objects = {
        document,
        jQuery,
        window
    };

    if (typeof interceptor === 'function') {
        interceptor(objects);
    }

    return Object.assign(objects, {
        namely: require('../../src/jquery-namely.js')
    });
};
