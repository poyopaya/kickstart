module.exports = (grunt) ->

  grunt.initConfig(
    pkg: grunt.file.readJSON('package.json')
  )

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.registerTask('default', ['uglify'])