define([], function() {
    function init() {
        firebase.database().ref('hikes').once('value').then(function(snapshot) {
            var allHikes = snapshot.val();
            var hikes = [];

            for (var item in allHikes) {
                if (allHikes.hasOwnProperty(item)) {
                    hikes.push(allHikes[item]);
                }
            }
            
            display(hikes);
    
            addEvents(hikes);  
        });                                        
    }

    function display(hikes) {
        $('#main').html(Handlebars.templates.mainView({
            mainTable: Handlebars.templates.mainTable({
                hikes: hikes
            })            
        }));
    }

    function addEvents(hikes) {
        $('#main-search input').on('keyup', function(e) {
            var searchValue = e.target.value;
            var hikesSubset = [];
    
            for (var i = 0; i < hikes.length; i++) {
                var hike = hikes[i];
                if (hike.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
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

    return {
        init: init
    };
});