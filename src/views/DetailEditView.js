define([], function() {
    function init(id) {
        var databaseReference = firebase.database().ref('hikes/' + id);                
        databaseReference.once('value').then(function(snapshot) {
            var hike = snapshot.val();
            
            display(hike);
            addEvents(hike);
        });        
    }

    function display(hike) {
        $('#app-main').html(Handlebars.templates.detailViewEdit({
            hike: hike
        }));
    }

    function addEvents(hike) {
        $('#detail-edit-save').on('click', function() {
            // gather title
            var title = $('#detail-edit-title-container input').val();
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
            var databaseReference = firebase.database().ref('hikes/' + hike.id);
            databaseReference.update({
                title: title,
                description: {
                    paragraphs: paragraphs
                }
            }, function() {
              // when upload is successful, back to hike page. 
              segueToHikeDetailPage(hike.id);
            });            
        });

        $('#detail-edit-cancel').on('click', function() {
            segueToHikeDetailPage(hike.id);
        });

        $('#detail-edit-add-paragraph').on('click', function() {
            $('.detail-edit-description-wrapper')
            .last()
            .after('<div class="detail-edit-description-wrapper"><textarea cols="100" rows="6"></textarea></div>');
        });
    }

    function segueToHikeDetailPage(id) {
        window.location.hash = '#/hike/' + id;
    }
    
    return {
        init: init
    };
});