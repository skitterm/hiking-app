require([
    'app/router',
    'app/views/MainView',
    'app/views/DetailView',
    'app/views/DetailEditView',
    'app/views/SignInView',
    'app/views/Header',
    'dojo/domReady!'
], 
function(
    router,
    MainView,
    DetailView,
    DetailEditView,
    SignInView,
    Header
) {    
    Header.init();       
    
    router.init({
        main: {
            callback: MainView.init
        },
        detail: {
            callback: DetailView.init
        },
        detailEdit: {
            callback: DetailEditView.init
        },
        signIn: {
            callback: SignInView.init
        }
    }, {
        signedIn: true
    });          
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $('.auth-only').show();
            $('.unauth-only').hide();
        }   
        else {
            $('.auth-only').hide();
            $('.unauth-only').show();
        }     
    });
});