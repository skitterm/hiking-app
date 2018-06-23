module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    keepalive: true
                }
            }            
        },
        watch: {
            app: {
                files: ['src/**'],
                options: {
                    livereload: true
                }                
            }
        }
    });

    grunt.registerTask('default', [
        'connect'
    ]);
};