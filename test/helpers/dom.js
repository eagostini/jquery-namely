import jsdom from 'jsdom';

module.exports = new jsdom.JSDOM({
    input: [
        '<!DOCTYPE html>',
        '<html>',
            '<head />',
            '<body />',
        '</html>'
    ]
});
