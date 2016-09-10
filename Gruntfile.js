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
              'htdocs/css/desktop/style.css': 'src/scss/desktop.scss',
              'htdocs/css/mobile/style.css': 'src/scss/mobile.scss'
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
              'htdocs/css/desktop/style.min.css': 'htdocs/css/desktop/style.css',
              'htdocs/css/mobile/style.min.css': 'htdocs/css/mobile/style.css'
            }
          }
        },

        autoprefixer: {
            options: {
              browsers: ['last 2 versions', 'ie 10', 'ie 11']
            },
            dist: {
                files: {
                    'htdocs/css/desktop/style.css': 'htdocs/css/desktop/style.css',
                    'htdocs/css/mobile/style.css': 'htdocs/css/mobile/style.css'
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
              'htdocs/desktop.html': 'src/pug/desktop/*.pug',
              'htdocs/mobile.html': 'src/pug/mobile/*.pug'
            }
          }
        },

        watch: {
            pug: {
              files: ['src/pug/desktop/*.pug', 
                      'src/pug/mobile/*.pug', 
                      'src/pug/desktop/modules/*.pug', 
                      'src/pug/mobile/modules/*.pug'
                      ],
              tasks: ['pug'],
              options: { livereload: true }
            },
            scripts: {
              files: ['src/js/*.js', 'src/js/modules/*.js'],
              tasks: ['concat', 'uglify'],
              options: {
                spawn: false,
                livereload: true
              }
            },
            css: {
              files: ['src/scss/*.scss', 
                      'src/scss/base/*.scss', 
                      'src/scss/desktop/*.scss', 
                      'src/scss/mobile/*.scss', 
                      'src/scss/desktop/sections/*.scss', 
                      'src/scss/mobile/sections/*.scss', 
                      ],
              tasks: ['sass', 'autoprefixer'],
              options: {
                spawn: false,
                livereload: true
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