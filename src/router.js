define([], function() {
    var routes = null;
    var isSignedIn = false;

    function init(inRoutes) {
        routes = inRoutes;                
        window.onhashchange = function(event) {                        
            route();
        };

        route();

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                isSignedIn = true;
            }   
            else {
                isSignedIn = false;
            }     
        });
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
            case 'edit':                
                if (isSignedIn) {
                    dynamicID = pathParts[3] || '';
                    routes.detailEdit.callback(dynamicID); 
                }                
                else {
                    window.history.back();
                }
                break;
            case 'sign-in':
                if (!isSignedIn) {
                    routes.signIn.callback();
                }    
                else {
                    window.history.back();
                }            
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