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
                files: ['src/**', '!src/templates.js'],
                options: {
                    livereload: true
                },
                tasks: ['exec']                
            }
        },
        exec: {
            handlebars: {
                command: 'handlebars src/templates/ -f src/templates.js'
            }
        }
    });

    grunt.registerTask('default', [
        'connect'
    ]);
};