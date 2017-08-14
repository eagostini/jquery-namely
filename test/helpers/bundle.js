import ava from 'ava';
import fs from 'fs';
import retriever from './retriever.js';

const {
    document,
    jQuery,
    namely,
    window
} = retriever();

class Bundle {
    constructor () {
        Object.assign(this, exports);
        this.namely(this.jQuery);

        document.body.innerHTML = fs.readFileSync('./test/helpers/bundle.stub');
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
