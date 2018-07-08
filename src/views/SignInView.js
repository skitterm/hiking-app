define([], function() {
    function init() {
        if (firebase.auth().currentUser) {
            window.location.hash = '#/';
        }

        display();
        initAuth();        
    }

    function display() {
        $('#app-main').html(Handlebars.templates.signIn());
    }

    function initAuth() {
        // FirebaseUI config.        
        var uiConfig = {
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            signInSuccessUrl: 'index.html#/',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ]
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.        
        ui.start('#firebaseui-auth-container', uiConfig);        
    }
    
    return {
        init: init
    };
});