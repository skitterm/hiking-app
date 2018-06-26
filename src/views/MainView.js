define([], function() {
    function init() {
        var hikes = [
            {
                name: 'San Gorgonio via Vivian Creek', 
                area: 'San Gorgonio',
                distance: 24,
                elevationGain: 5600
            },
            {
                name: 'Little Green Valley',
                area: 'Running Springs',
                distance: 3.6,
                elevationGain: 1200
            }
        ];    
        
        display(hikes);
    
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
    }

    function display(hikes) {
        $('#main').html(Handlebars.templates.mainPage({
            mainTable: Handlebars.templates.mainTable({
                hikes: hikes
            })            
        }));
    }

    return {
        init: init
    };
});