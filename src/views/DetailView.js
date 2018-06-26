define([
    'esri/map',
    'esri/graphic',
    'esri/Color',
    'esri/geometry/Point',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol'
], function(
    Map,
    Graphic,
    Color,
    Point,
    SimpleMarkerSymbol,
    SimpleLineSymbol
) {    
    function init(id) {        
        firebase.database().ref('hikes/' + id).once('value').then(function(snapshot) {
            var hike = snapshot.val();
            
            display(hike);
            setCarousel(0, hike.images);
        });        
    }

    function display(hike) {
        $('#main').html(Handlebars.templates.detailView({
            hike: hike          
        }));

        var index = 0;

        $('#carousel-prev').on('click', function() {
            index--;
            setCarousel(index, hike.images);
        });

        $('#carousel-next').on('click', function() {
            index++;
            setCarousel(index, hike.images);
        });

        var map = new Map('detail-map', {
            center: [hike.coordinates.x, hike.coordinates.y],
            zoom: 13,
            basemap: 'topo'            
        });         

        map.on('load', function() {
            onMapLoaded(map, hike.coordinates);
        });        
    }

    function onMapLoaded(map, coordinates) {
        map.disableScrollWheelZoom();
        map.disablePinchZoom();

        var point = new Point(coordinates.x, coordinates.y);
        var symbol = new SimpleMarkerSymbol(
            SimpleMarkerSymbol.STYLE_CIRCLE, 
            25, 
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color('#000'), 3),
            new Color('#F00')
        );
        var graphic = new Graphic(point, symbol);
        map.graphics.add(graphic);
    }

    function setCarousel(index, images) {
        $('.detail-carousel-item').removeClass('selected');

        $('.detail-carousel-item').eq(index).addClass('selected');

        if (index === 0) {
            $('#carousel-prev').prop('disabled', true);
        }
        else {
            $('#carousel-prev').prop('disabled', false);
        }

        if (index === images.length - 1) {
            $('#carousel-next').prop('disabled', true);
        }
        else {
            $('#carousel-next').prop('disabled', false);
        }
    }

    return {
        init: init
    };
});