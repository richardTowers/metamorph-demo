/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/handlebars/handlebars.d.ts" />
/// <reference path="typings/metamorph/metamorph.d.ts" />
Handlebars.registerHelper('mm-until-response', function (context, template) {
    var _this = this, morph = new Metamorph(template.fn(_this));

    $.ajax('api/DelayedResponse/' + context).done(function (data) {
        var newContext = $.extend(context, data, { 'plural': data.result !== 1 });
        morph.html(template.inverse(newContext));
    });

    return morph.outerHTML();
});

$(function () {
    var input = $('#template').html();
    var outputElement = $('#output');

    var template = Handlebars.compile(input);

    var result = template({
        rows: [
            { 'time': 0 },
            { 'time': 1 },
            { 'time': 2 },
            { 'time': 3 },
            { 'time': 4 },
            { 'time': 5 },
            { 'time': 6 },
            { 'time': 7 }
        ]
    });

    outputElement.html(result);
});
//# sourceMappingURL=main.js.map
