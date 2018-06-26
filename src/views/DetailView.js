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
    /*
    Dynamic link
    Data hosted on server
    Get hike by ID
    Add image -- 1h    
    Editable -- 2h*
    Comments -- 1h

    THEN PUT THIS DATA IN DATABASE
    */

    function init() {
        var hike = {
            title: 'San Gorgonio via Vivian Creek', 
            area: 'San Gorgonio',
            distance: 24,
            elevationGain: 5600,
            coordinates: {
                x: '-116.9',
                y: '34.086'
            },
            images: [
                {
                    url: 'img/IMG-5033.jpg' 
                },
                {
                    url: 'img/IMG-5079.jpg' 
                },
                {
                    url: 'img/IMG-5085.jpg' 
                },
            ],
            description: {
                paragraphs: [
                    {
                        text: 'San Gorgonio is the tallest mountain in Southern California, rising some 11,000 feet above its eponymous pass 15 miles to the south. "Old Greyback", as it is known, sits near the treeline and features good biodiversity from base to peak.'
                    },
                    {
                        text: 'There are a few approaches up the mountain, but the Vivian Creek trail is the most popular. It is the nearest trailhead to LA. The ascent is shorter in distance than the other trails up as well, though this means that elevation gain is significant with each mile. Additionally, as this route climbs the south face of the mountain, heat and exposure to the sun are a persistent nemesis.'
                    }
                ]
            }
        };

        display(hike);
        setCarousel(0, hike.images);
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
            var point = new Point(hike.coordinates.x, hike.coordinates.y);
            var symbol = new SimpleMarkerSymbol(
                SimpleMarkerSymbol.STYLE_CIRCLE, 
                25, 
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color('#000'), 3),
                new Color('#F00')
            );
            var graphic = new Graphic(point, symbol);
            map.graphics.add(graphic);
        });        
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