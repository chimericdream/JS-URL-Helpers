(function(w, d) {
    'use strict';

    var getAbsoluteUrl = (function() {
        var a;

        return function(url) {
            if(!a) a = d.createElement('a');
            a.href = url;

            return a.href;
        };
    })();

    w.fnGetAbsUrl = getAbsoluteUrl;
}(window, document));