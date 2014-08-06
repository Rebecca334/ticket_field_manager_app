module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    zip: {
      'dest/app.zip': [
        'manifest.json', 
        'app.js', 
        'app.css', 
        'translations/**', 
        'templates/**', 
        'assets/**',
        ],
    }
  });

  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['zip']);
}