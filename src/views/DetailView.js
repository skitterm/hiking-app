define([
    'esri/map',
    'esri/graphic',
    'esri/Color',
    'esri/geometry/Point',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol',
    'dojo/io-query'
], function(
    Map,
    Graphic,
    Color,
    Point,
    SimpleMarkerSymbol,
    SimpleLineSymbol,
    ioQuery
) {    
    var index = 0;

    function init(id) {       
        var databaseReference = firebase.database().ref('hikes/' + id);                
        databaseReference.once('value').then(function(snapshot) {
            var hike = snapshot.val();
            
            display(hike);
            setCarousel(hike.images);
            addEvents(hike);            
        })
        .catch(function(error) {
            console.log(error);
        });;                    
    }

    function display(hike) {
        $('#app-main').html(Handlebars.templates.detailView({
            hike: hike          
        }));

        $('#carousel-prev').on('click', function() {
            index--;
            setCarousel(hike.images);
        });

        $('#carousel-next').on('click', function() {
            index++;
            setCarousel(hike.images);
        });

        var map = new Map('detail-map', {
            center: [hike.coordinates.x, hike.coordinates.y],
            zoom: 13,
            basemap: 'topo'            
        });         

        map.on('load', function() {
            onMapLoaded(map, hike.coordinates);
        });        

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                $('#detail-edit-button').show();
            }
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

    function setCarousel(images) {
        $('.detail-carousel-item').removeClass('selected');

        $('.detail-carousel-item').eq(index).addClass('selected');

        if (index === 0) {
            $('#carousel-prev').prop('disabled', true);
        }
        else {
            $('#carousel-prev').prop('disabled', false);
        }

        if (!images || index === images.length - 1) {
            $('#carousel-next').prop('disabled', true);
        }
        else {
            $('#carousel-next').prop('disabled', false);
        }
    }

    function addEvents(hike) {
        $('#carousel-upload-image-toggle').on('click', function(e) {
            $('#carousel-upload-image').show();

            $(e.currentTarget).hide();
        });      

        // Code based on Firecast abt uploading to firebase storage:
        // https://www.youtube.com/watch?v=SpxHVrpfGgU&t=0s&list=PLOU2XLYxmsIKkg55tSHz0Xc8ZMVS1GJQL&index=52
        $('#carousel-upload-image')[0].addEventListener('change', function(e) {
            var file = e.target.files[0];            
            var storageReference = firebase.storage().ref(hike.id + '/' + file.name);

            var uploadTask = storageReference.put(file);

            uploadTask.on('state_changed', 
                function progress() {},
                function error() {},
                function complete() {
                    storageReference.getDownloadURL().then(function(url) {
                        'https://firebasestorage.googleapis.com/v0/b/hiking-app-ee024.appspot.com/o/-LFued9kiMpZgy_BOOFX%2FIMG_0034.JPG?alt=media&token=token';
                        // get the query params
                        // split query
                        var urlParts = url.split('?');
                        var queryParamsObj = ioQuery.queryToObject(urlParts[1]);
                        // strip out the token
                        delete queryParamsObj.token;
                        // put back into a URL
                        var newUrl = urlParts[0] + '?' + ioQuery.objectToQuery(queryParamsObj);

                        var databaseReference = firebase.database().ref('hikes/' + hike.id);

                        var updatedImages = hike.images ? hike.images.slice(0) : [];
                        updatedImages.push({
                            url: newUrl
                        });

                        databaseReference.update({
                            images: updatedImages
                        }, function() {
                            $('.detail-carousel-item').last().after('<div class="detail-carousel-item"><img src="' + newUrl + '"></div>');
                            index = updatedImages.length - 1;
                            setCarousel(updatedImages);

                            $('#carousel-upload-image-toggle').show();
                            $('#carousel-upload-image').hide();
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });                                                                                           
                }
            );
        });
    }

    return {
        init: init
    };
});