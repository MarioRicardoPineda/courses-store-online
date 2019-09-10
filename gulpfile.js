
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      brosersync = require('browser-sync').create();


// Compilar scss a css
function styles(){
    // 1- ¿Donde esta mis archivos scss?
    return gulp.src('./sass/**/*.scss')
    // 2- pass that file through sass compile
        .pipe(sass({
            outputStyle : 'expanded'
        }))
        // Auto prefixer
        .pipe(autoprefixer())
    // 3- ¿Donde guardo los archivos compilados css?
        .pipe(gulp.dest('./css'))
    // 4- stream changes to all browsers
        .pipe(brosersync.stream())
}

function dev(){
    brosersync.init({
        server : {
            baseDir : './'
        }
    });

    gulp.watch('./sass/**/*.scss', styles)
    gulp.watch('./*.html').on('change', brosersync.reload)
}

exports.default = function () {
    dev()
};
