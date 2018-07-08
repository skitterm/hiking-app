define([], function() {
    function init() {
        display();
        initEvents();            
    }

    function display() {
        $('#app-header').html(Handlebars.templates.header());
    }

    function initEvents() {
        $('#header-link-sign-out').on('click', function() {
            firebase.auth().signOut().then(function() {

            })
            .catch(function(error) {
                console.log(error);
            });
            window.location.reload();
        });        
    }

    return {
        init: init
    };
});