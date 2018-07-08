define([
    'esri/map',
    'esri/graphic',
    'esri/Color',
    'esri/geometry/Point',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol'
], 
function(
    Map,
    Graphic,
    Color,
    Point,
    SimpleMarkerSymbol,
    SimpleLineSymbol    
) {
    var latitude = 38;
    var longitude = -95;

    function init(id) {
        var databaseReference = firebase.database().ref('hikes/' + id);                
        databaseReference.once('value').then(function(snapshot) {
            var hike = snapshot.val();
            
            if (hike && hike.coordinates) {
                latitude = hike.coordinates.y;
                longitude = hike.coordinates.x;
            }            

            display(hike, id === 'new');
            addEvents(hike, id === 'new');
        })
        .catch(function(error) {
            console.log(error);
        });;        
    }

    function display(hike, isNew) {
        $('#app-main').html(Handlebars.templates.detailViewEdit({
            hike: hike
        }));

        var map = new Map('detail-edit-map', {
            center: [longitude, latitude],
            zoom: isNew ? 4 : 13,
            basemap: 'topo'            
        });         
        
        map.on('load', function() {
            map.disableScrollWheelZoom();
            map.disablePinchZoom();
            
            var point = new Point(longitude, latitude);
            renderPoint(map, point);            
            
            map.on('click', function(event) {
                var point = new Point(event.mapPoint);
                renderPoint(map, point);
            
                latitude = point.getLatitude();
                longitude = point.getLongitude();
            });
        });                            
    }

    function renderPoint(map, point) {
        var symbol = new SimpleMarkerSymbol(
            SimpleMarkerSymbol.STYLE_CIRCLE, 
            25, 
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color('#000'), 3),
            new Color('#F00')
        );
        var graphic = new Graphic(point, symbol);
        
        map.graphics.clear();
        map.graphics.add(graphic);
    }

    function addEvents(hike, isNew) {
        var id = isNew ? firebase.database().ref().child('hikes').push().key : hike.id;

        $('#detail-edit-save').on('click', function() {
            // gather title
            var title = $('#detail-edit-title-container input').val();

            var area = $('#detail-edit-area-container input').val();
            var distance = parseInt($('#detail-edit-distance-container input').val(), 10);
            var elevationGain = parseInt($('#detail-edit-elevation-container input').val(), 10);

            // gather paragraphs
            var paragraphs = [];

            $('#detail-edit-description-container textarea').each(function() {
                var paragraphText = $(this).val();

                if (paragraphText) {
                    paragraphs.push({
                        text: paragraphText
                    });
                }                
            });

            // send to upload.
            
            var databaseReference = firebase.database().ref('hikes/' + id);
            databaseReference.update({
                id: id,
                title: title,
                description: {
                    paragraphs: paragraphs
                },
                coordinates: {
                    x: longitude,
                    y: latitude
                },
                area: area,
                distance: distance,
                elevationGain: elevationGain
            }, function() {
                // when upload is successful, back to hike page. 
                segueToHikeDetailPage(id);
            });                      
        });

        $('#detail-edit-cancel').on('click', function() {
            if (isNew) {
                window.history.back();
            }
            else {
                segueToHikeDetailPage(id);
            }            
        });

        $('#detail-edit-add-paragraph').on('click', function() {
            var markup = '<div class="detail-edit-description-wrapper"><textarea cols="100" rows="6"></textarea></div>';

            if ($('.detail-edit-description-wrapper').length) {
                $('.detail-edit-description-wrapper')
                .last()
                .after(markup);
            }
            else {
                $('#detail-edit-add-paragraph').before(markup);
            }            
        });
    }

    function segueToHikeDetailPage(id) {
        window.location.hash = '#/hike/' + id;
    }
    
    return {
        init: init
    };
});