"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range = document.createRange && document.createRange();
var htmlToFragment;
exports.htmlToFragment = htmlToFragment;
if (range && range.createContextualFragment) {
    var selected_1 = false;
    exports.htmlToFragment = htmlToFragment = function (html) {
        if (!selected_1) {
            range.selectNode(document.body);
            selected_1 = true;
        }
        return range.createContextualFragment(html);
    };
}
else {
    exports.htmlToFragment = htmlToFragment = function (html) {
        var el = document.createElement('div');
        var df = document.createDocumentFragment();
        el.innerHTML = html;
        for (var child = void 0; (child = el.firstChild);) {
            df.appendChild(child);
        }
        return df;
    };
}
