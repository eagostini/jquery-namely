import ava from 'ava';
import fs from 'fs';
import jsdom from 'jsdom';

const DOM = new jsdom.JSDOM({
    input: [
        '<!DOCTYPE html>',
        '<html>',
            '<head />',
            '<body />',
        '</html>'
    ]
});

const { window } = DOM;
const document = window.document;
const jQuery = require('jquery')(window);
const namely = require('../../src/jquery-namely.js');

class Bundle {
    constructor () {
        Object.assign(this, exports);
        this.namely(this.jQuery);

        document.body.innerHTML = fs.readFileSync('./test/helpers/bundle.xml');
    }
}

module.exports = Object.assign(Bundle, (() => {
    return exports = {
        ava,
        document,
        jQuery,
        namely,
        window
    };
})());
