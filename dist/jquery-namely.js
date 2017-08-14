(function (exports) {
    if (typeof window === 'undefined') {
        module.exports = exports;
    } else {
        return exports(window.jQuery);
    }
})(function (jQuery) {
    if (!jQuery) {
        throw 'Namely cannot work if jQuery has not been loaded first.';
    }

    var expr = jQuery.expr;
    var identifier = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+';
    var key = 'NAME';

    expr.match[key] = new RegExp('^@(' + identifier + '(\\[(' + identifier + ')?\\])*)');

    expr.filter[key] = function (name) {
        return function (element) {
            return element.getAttribute('name') === name;
        };
    };

    expr.find[key] = function (name, context) {
        if (context.getElementsByName) {
            return context.getElementsByName(name);
        }
    };

    return jQuery;
});