import test from 'ava';
import retriever from '../helpers/retriever.js';

test('Initializing objects in Node mode.', t => {
    t.notThrows(() => {
        retriever();
    });
});
