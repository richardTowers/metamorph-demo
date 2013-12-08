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
    $('.js-handlebars-output').each(function (index, element) {
        var $element = $(element);
        var templateSelector = $element.data('template-selector');
        var templateSource = $(templateSelector).html();
        var template = Handlebars.compile(templateSource);
        var context = $element.data('context');
        $element.html(template(context));
    });
});
//# sourceMappingURL=main.js.map
