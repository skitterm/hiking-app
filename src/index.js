require([
    'app/router',
    'app/views/MainView',
    'app/views/DetailView',
    'app/views/DetailEditView',
    'dojo/domReady!'
], 
function(
    router,
    MainView,
    DetailView,
    DetailEditView
) {      
    $('#app-header').html(Handlebars.templates.header());
    
    router.init({
        main: {
            callback: MainView.init
        },
        detail: {
            callback: DetailView.init
        },
        detailEdit: {
            callback: DetailEditView.init
        }
    });        
});