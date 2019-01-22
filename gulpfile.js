//Include required modules
var gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    source = require("vinyl-source-stream")

    
gulp.task("default", function(){
    return browserify({
        entries: ["./assets/js/src/index.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./assets/js"))
    ;
});