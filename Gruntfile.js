module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    keepalive: true
                }
            }            
        }
    });

    grunt.registerTask('default', [
        'connect'
    ]);
};