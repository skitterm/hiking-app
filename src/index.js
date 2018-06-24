require([
    'app/router',
    'dojo/domReady!'
], 
function(
    router
) {            
    router.init(displayView);

    function displayView() {       
        var hikes = [
            
        ];
        
        $('#main').html(Handlebars.templates.mainPage({
            hikes: hikes
        }));
    }
});