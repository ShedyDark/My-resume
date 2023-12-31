/* Paths variables */
var basepath = {
    src: 'src/',
    dest: 'htdocs/'
};
var path = {
    build: {
        js: basepath.dest + 'f/js/',
        css: basepath.dest + 'f/css/',
        img: basepath.dest + 'f/i/',
        fonts: basepath.dest + 'f/fonts/',
        pug: basepath.dest
    },
    src: {
        js: basepath.src + 'scripts/',
        pug: basepath.src +  '*.pug',
        php: basepath.src +  '*.php',
        css: basepath.src + 'scss/*.scss',
        img: basepath.src + 'images/**/*',
        fonts: basepath.src + 'fonts/*'
    },
    watch: {
        pug: basepath.src + '**/*.pug',
        php: basepath.src + '**/*.php',
        js: basepath.src + 'scripts/**/*.js',
        css: basepath.src + 'scss/**/*.scss',
        img: basepath.src + 'images/**/*',
        fonts: basepath.src + 'fonts/**/*'
    }
};

/*
    Let the magic begin
*/
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    prefixer = require('gulp-autoprefixer'), 
    plumber = require("gulp-plumber"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    del = require('del'),
    reload = browserSync.reload;




/* Pug templates */
gulp.task('pug', function(){
    return gulp.src(path.src.pug)
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.pug))
        .pipe(reload({stream: true}));
});


/* Sass */
gulp.task('sass', function() {

});

/* stylus */

gulp.task('styles', function() {
    return gulp.src(['src/styles/*.styl'])
        .pipe(plumber())
        .pipe(stylus())
        //.pipe(minifyCSS())
        .on('error', console.log)
        .pipe(prefixer({
            overrideBrowserslist: ['last 2 versions', 'safari 9'],
            cascade: false
        }))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

/* JS */
gulp.task('vendorjs', function() {
    return gulp.src(path.src.js+"vendor/*.js")
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('userjs', function() {
    return gulp.src(path.src.js+"*.js")
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});




/* Images */
gulp.task('images', function () {
    return gulp.src([path.src.img])
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

/* Fonts */
gulp.task('fonts', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({stream: true}));
});


/* php */
gulp.task('php', function() {
  return gulp.src(path.src.php)
    .pipe(gulp.dest(basepath.dest));
});





/* server */


/* default actions */
// gulp.task('default', gulp.series('serve'));
gulp.task('default', done => {
    browserSync.init({
        server: {
            baseDir: basepath.dest
        },
        notify: false,
    });

    gulp.watch(path.watch.pug, gulp.series('pug'));
    gulp.watch(path.watch.php, gulp.series('php'));
    //gulp.watch([path.watch.css, '!src/scss/utils/*.*'], ['sass']);
    gulp.watch('src/styles/**', gulp.series('styles'));
    gulp.watch(path.watch.js, gulp.series('vendorjs', 'userjs'));
    gulp.watch(path.watch.img,  gulp.series('images'));
    gulp.watch(path.watch.fonts,  gulp.series('fonts'));
    //gulp.watch("htdocs/*.html").on('change', browserSync.reload);
    done();
  });

/* clean */
gulp.task('clean', function() {
  return del([
    basepath.dest
  ])
});
