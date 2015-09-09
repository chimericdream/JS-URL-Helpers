(function(w) {
    'use strict';

    var getQueryVariable = (function() {
        var query = w.location.search.substring(1);
        var vars = query.split("&");

        return function(variable) {
            console.log('test');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] === variable) {
                    return pair[1];
                }
            }
            return false;
        };
    })();

    w.fnGetQueryVar = getQueryVariable;
}(window));