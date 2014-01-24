module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'js/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'index.js'
        }
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>', 'sass/*.scss'],
      tasks: ['jshint', 'compass'],
      express: {
        files:  [ 'index.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      },
      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['compass']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('dev', ['express:dev', 'watch']);

};