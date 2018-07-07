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
        $('#app-main').empty();
      
        var hashValue = window.location.hash.substring(1);
        var pathParts = hashValue.split('/');
        var pathValue = pathParts[1] || '';
        var dynamicID = '';

        switch(pathValue) {
            case '':
                routes.main.callback();
                break;
            case 'hike':
                dynamicID = pathParts[2] || '';
                routes.detail.callback(dynamicID);
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