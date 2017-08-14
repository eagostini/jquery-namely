import {
    ava as test,
    jQuery as $,
    namely as bootstrapper,
} from './helpers/bundle.js';

test('Checking if Namely fails bootstrapping when jQuery is not available.', t => {
    t.throws(() => {
        bootstrapper();
    });
});

test('Checking if Namely can bootstrap properly.', t => {
    bootstrapper($);

    t.truthy($.expr.filter.NAME, 'Filter wasn\'t bootstrapped.');
    t.truthy($.expr.find.NAME, 'Finder wasn\'t bootstrapped.');
    t.truthy($.expr.match.NAME, 'Matcher wasn\'t bootstrapped.');
});
