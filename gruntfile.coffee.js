module.exports = (grunt) ->
  grunt.initConfig
    includes:
      files:
        src: ["dev/*.html"] # Source files
        dest: "fancy" # Destination directory
        flatten: true
        cwd: "."
        options:
          silent: true
          filenamePrefix: "partials/"
          filenameSuffix: ".html"

    clean:
      files: ["fancy/*.html", "fancy/*.js", "fancy/img/"]

    copy:
      main:
        files: [
          expand: true
          cwd: "dev/img/"
          src: ["**"]
          dest: "fancy/img"
        ,
          expand: true
          cwd: "dev/js"
          src: ["**"]
          dest: "fancy/js"
        ]

    watch:
      files: ["dev/*.html", "dev/js/*.js", "dev/partials/*.html", "dev/img/icons*.png"]
      tasks: ["clean", "includes", "copy"]

  require("matchdep").filterDev("grunt-*").forEach grunt.loadNpmTasks
  grunt.registerTask "default", ["watch"]