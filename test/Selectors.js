const {
    ava: test,
    jQuery: $
} = new (require('./helpers/bundle.js'));

let body = $('body');
let length = (query, context) => {
    return (context ? context.find(query) : $(query)).length;
};

test('Element does not exist in DOM.', t => {
    t.falsy(length('@address'));
});

test('Element found in DOM by its name only.', t => {
    t.truthy(length('@name'));
});

test('Element found in DOM by its name only in a given context.', t => {
    t.truthy(length('@name', body));
});

test('Element found in DOM by its tag and name.', t => {
    t.truthy(length('input@name'));
});

test('Element found in DOM by its tag and name in a given context.', t => {
    t.truthy(length('input@name', body));
});
