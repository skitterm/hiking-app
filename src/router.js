define([], function() {
    var routes = null;

    function init(inRoutes) {
        routes = inRoutes;                
        window.onhashchange = function() {
            route();
        };

        route();
    }

    function route() {
        $('#main').empty();

        var hashValue = window.location.hash.substring(1);

        switch(hashValue) {
            case '':
            case '/':
                routes.main.callback();
                break;
            case '/hike':
                routes.detail.callback();
                break;
            default: 
                routes.main.callback();
                break;
        }                
    }

    return {        
        init: init 
    };
});