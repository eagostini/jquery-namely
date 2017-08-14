const {
    ava: test,
    jQuery: $
} = new (require('./helpers/bundle.js'));

let context = $('form');
let length = (query, element) => {
    return (element ? element.find(query) : $(query)).length;
};

const message = {
    group: {
        array: `Array grouped element wasn't found.`,
        object: `Object grouped element wasn't found.`
    },
    prefix: 'Checking shorthand for an element',
    found: 'found in DOM by its'
};

test(`${ message.prefix } that does not exist in DOM.`, t => {
    t.falsy(length('@address'));
});

test(`${ message.prefix } that does not exist in DOM in a given context.`, t => {
    t.falsy(length('@address', context));
});

test(`${ message.prefix } ${ message.found } name only.`, t => {
    t.truthy(length('@name'));
});

test(`${ message.prefix } ${ message.found } name only in a given context.`, t => {
    t.truthy(length('@name', context));
});

test(`${ message.prefix } ${ message.found } tag and name.`, t => {
    t.truthy(length('input@name'));
});

test(`${ message.prefix } ${ message.found } tag and name in a given context.`, t => {
    t.truthy(length('input@name', context));
});

test(`${ message.prefix } ${ message.found } name only when grouped.`, t => {
    t.truthy(length('@preferences[agreement]'), message.group.object);
    t.truthy(length('@skills[]'), message.group.array);
});

test(`${ message.prefix } ${ message.found } name only in a given context when grouped.`, t => {
    t.truthy(length('@preferences[agreement]', context), message.group.object);
    t.truthy(length('@skills[]', context), message.group.array);
});

test(`${ message.prefix } ${ message.found } tag and name when grouped.`, t => {
    t.truthy(length('input@preferences[agreement]'), message.group.object);
    t.truthy(length('select@skills[]'), message.group.array);
});

test(`${ message.prefix } ${ message.found } tag and name in a given context when grouped.`, t => {
    t.truthy(length('input@preferences[agreement]', context), message.group.object);
    t.truthy(length('select@skills[]', context), message.group.array);
});

test(`Checking shorthand for a sensitivity case.`, t => {
    t.falsy(length('@Name'));
});
