(exports => {
    if (typeof window === 'undefined') {
        module.exports = exports;
    } else {
        return exports(window.jQuery);
    }
})(jQuery => {
    if (!jQuery) {
        throw 'Namely cannot work if jQuery has not been loaded first.';
    }

    const expr = jQuery.expr;
    const identifier = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+';
    const key = 'NAME';

    expr.match[key] = new RegExp(`^@(${ identifier }(\\[(${ identifier })?\\])*)`);

    expr.filter[key] = name => {
        return element => {
            return element.getAttribute('name') === name;
        };
    };

    expr.find[key] = (name, context) => {
        if (context.getElementsByName) {
            return context.getElementsByName(name);
        }
    };

    return jQuery;
});
