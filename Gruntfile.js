module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {                              // Task 
          dist: {                            // Target 
            options: {                       // Target options 
              style: 'expanded',
              trace: true,
              lineNumbers: true
            },
            files: {                         // Dictionary of files 
              'htdocs/css/style.css': 'src/sass/*.scss'
            }
          }
        },

        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'htdocs/css/style.min.css': 'htdocs/css/style.css'
            }
          }
        },

        autoprefixer: {
            options: {
              browsers: ['last 13 versions', '> 5%','ie 8', 'ie 7','ie 9']
            },
            dist: {
                files: {
                    'htdocs/css/style.css': 'htdocs/css/style.css'
                }
            }

        },
        
        concat: {
            
          dist: {
                 src: [
                     // 'js/libs/*.js',  All JS in the libs folder
                     'src/js/*.js',
                     'src/js/modules/*.js'
                 ],
                 dest: 'htdocs/js/app.js',
          }
        },

        uglify: {
          build: {
              src: 'htdocs/js/app.js',
              dest: 'htdocs/js/app.min.js'
          }
        },

        pug: {
          compile: {
            options: {
              data: {
                debug: false
              },
              pretty: true
            },
            files: {
              'htdocs/index.html': ['src/pug/*.pug']
            }
          }
        },

        watch: {
            options: { livereload: true },
            pug: {
              files: ['src/pug/*.pug'],
              tasks: ['pug']
            },
            scripts: {
              files: ['src/js/*.js', 'src/js/modules/*.js'],
              tasks: ['concat', 'uglify'],
              options: {
                spawn: false,
              }
            },
            css: {
              files: ['src/sass/*.scss'],
              tasks: ['sass', 'autoprefixer'],
              options: {
                spawn: false,
              }
            },
            cssmin: {
              files: ['htdocs/css/style.css'],
              tasks: ['cssmin'],
              options: {
                spawn: false,
              }
            }

        }





    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'pug']);
};