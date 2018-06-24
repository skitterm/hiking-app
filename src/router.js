define([], function() {
    function init() {                
        window.onhashchange = function() {
            route();
        };

        route();
    }

    function route() {
        console.log('new hash: ', window.location.hash);
    }

    return {        
        init: init 
    };
});