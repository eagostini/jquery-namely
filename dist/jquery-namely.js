var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (exports) {
    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) !== 'object') {
        var _module = {};
    }

    module.exports = exports;

    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
        return module.exports(window.jQuery);
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