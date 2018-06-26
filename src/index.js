require([
    'app/router',
    'app/views/MainView',
    'dojo/domReady!'
], 
function(
    router,
    MainView    
) {                
    router.init({
        main: {
            callback: MainView.init
        },
        detail: {
            callback: function() { alert('hi'); }
        }
    });        
});