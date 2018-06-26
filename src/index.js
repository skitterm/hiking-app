require([
    'app/router',
    'app/views/MainView',
    'app/views/DetailView',
    'dojo/domReady!'
], 
function(
    router,
    MainView,
    DetailView    
) {                
    router.init({
        main: {
            callback: MainView.init
        },
        detail: {
            callback: DetailView.init
        }
    });        
});