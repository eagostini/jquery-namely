import test from 'ava';
import retriever from '../helpers/retriever.js';

test('Initializing objects in Browser mode.', t => {
    t.notThrows(() => {
        retriever(objects => {
            global.window = objects.window;
        });
    });
});
