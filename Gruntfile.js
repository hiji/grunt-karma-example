module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.registerTask('test', ['karma']);

};