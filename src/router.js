define([], function() {
    var routeCallback = null;

    function init(callback) {
        routeCallback = callback;                
        window.onhashchange = function() {
            route();
        };

        route();
    }

    function route() {
        console.log('new hash: ', window.location.hash);
        routeCallback();
    }

    return {        
        init: init 
    };
});