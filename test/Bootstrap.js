import {
    ava as test,
    jQuery as $,
    namely as bootstrapper,
} from './helpers/bundle.js';

test('Failing when jQuery is not available in Namely.', t => {
    t.throws(() => {
        bootstrapper();
    });
});

bootstrapper($);

test('Verifying that Namely has been bootstrapped properly.', t => {
    t.truthy($.expr.filter.NAME, 'Filter wasn\'t bootstrapped.');
    t.truthy($.expr.find.NAME, 'Finder wasn\'t bootstrapped.');
    t.truthy($.expr.match.NAME, 'Matcher wasn\'t bootstrapped.');
});
