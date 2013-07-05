module.exports = function(grunt) {

    /*
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['asset/css', 'asset/js'],
        },
        less: {
            front: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'asset/css/client-<%= pkg.version %>.css': 'etc/css/app/external.less',
                    'asset/css/ie-<%= pkg.version %>.css': 'etc/css/app/ie.less',
                }
            },
        },
        uglify: {
            options: {
                //mangle: false,
                //compress: false,
                //beautify: true,
            },
            lib: {
                files: {
                    'asset/js/lib-<%= pkg.version %>.min.js': [
                        'etc/js/lib/src/*.js',
                    ]
                }
            },
            app: {
                files: {
                    'asset/js/app-<%= pkg.version %>.min.js': [
                        'etc/js/app/src/external.js',
                    ]
                }
            },
            loader: {
                files: {
                    'asset/js/loader-<%= pkg.version %>.min.js': [
                        'etc/js/lab.js',
                    ]
                }
            }
        },
        setPHPConstant: {
            js: {
                constant    : 'SCV_JS_VER',
                value       : '<%= pkg.version.toString() %>',
                file        : 'scv_app/config/constants.php'
            },
            css: {
                constant    : 'SCV_CSS_VER',
                value       : '<%= pkg.version.toString() %>',
                file        : 'scv_app/config/constants.php'
            }
        },
        watch: {
            app: {
                files: 'etc/js/app/src/*.js',
                tasks: ['uglify:app']
            },
            lib: {
                files: 'etc/js/lib/src/*.js',
                tasks: ['uglify:lib']
            },
            css: {
                files: 'etc/css/app/less/*.less',
                tasks: ['less']
            },
        }
    });
    */

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            front: {
                options: {
                    yuicompress: true,
                },
                files: {
                    'asset/css/main-<%= pkg.version %>.css': [
                        'bower_components/normalize-css/normalize.css',
                        'asset/internal/css/main.less'
                    ]
                }
            },
        },
        watch: {
            app: {
                files: 'asset/internal/css/main.less',
                tasks: ['less:front']
            }
        },
        connect: {
            hq: {
                options: {
                    port: 8080,
                    base: '.'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-php-set-constant');

    //grunt.registerTask('default', ['clean', 'less', 'uglify', 'setPHPConstant']);
    grunt.registerTask('default', ['less']);

};