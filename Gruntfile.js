module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'flux-application/bundle.js',
        dest: 'flux-application-build/<%= pkg.version %>.min.js'
      }
    },
    watch: {
      customers: {
        files: ['flux-application/**/*.js'],
        tasks: ['bundle'],
      },
    },
    exec: {
      bundle: 'STATIC_ROOT=./static watchify -o flux-application/bundle.js -v -d .',
      archive: 'mv flux-application-build/* ./archive/'
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-exec');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('bundle', ['exec:bundle']);
  grunt.registerTask('build', ['exec:archive', 'uglify']);

};