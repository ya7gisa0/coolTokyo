module.exports = function(grunt) {

  // load task
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // register tasks
    watch: {
      scripts: {
        files: 'deploy/assets/js/*.js',
        tasks: ['jshint']
        // options: {
        //   interrupt: true,
        // },
      },
      css: {
        files: ['deploy/assets/css/*.css', '_sass/*.scss'],
        tasks: ['sass']
      },
      autoprefixer: {
        files: 'deploy/css/main.css',
        tasks: ['autoprefixer']
      }
    },

    // lint
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        browser: true,
        strict: false,
        laxbreak: true,
        devel: true,
        globals: {
          jQuery: true,
          require: true,
          createjs: true,
          _: true,
          Y: true
        }
      },
      //test
       all: [
            'deploy/assets/js/*.js',
        ]

    },

    // sass
    sass: {
      dist: {
        files: {
          'deploy/assets/css/main.css': ['_sass/main.scss']
          // '_sass/main.css': '../main.scss'
          //expand: true,
          //cwd: 'styles',
          //src: ['*.scss'],
          //dest: '../public',
          //ext: '.css'
        }
      }
    },

    // autoprefixer
    autoprefixer: {
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'deploy/css/main.css',
        dest: 'deploy/css/main.css'
      },
    }

  // end of grunt.initConfig
  });

  //default
  grunt.registerTask('default', ['watch']);
};
