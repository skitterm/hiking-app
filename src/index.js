require([
    'app/router',
    'dojo/domReady!'
], 
function(
    router
) {            
    router.init(displayView);

    var hikes = [
        
    ];    
    
    displayView(hikes);

    $('#main-search input').on('keyup', function(e) {
        var searchValue = e.target.value;
        var hikesSubset = [];

        for (var i = 0; i < hikes.length; i++) {
            var hike = hikes[i];
            if (hike.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                hikesSubset.push(hike);
            }  
            else if (hike.area.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                hikesSubset.push(hike);
            }               
        }

        $('#hikes-table').html(Handlebars.templates.mainTable({
            hikes: hikesSubset
        }));
    });

    function displayView(hikes) {       
        $('#main').html(Handlebars.templates.mainPage({
            mainTable: Handlebars.templates.mainTable({
                hikes: hikes
            })            
        }));  
    }
});