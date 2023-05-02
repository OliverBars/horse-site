const { src, dest, watch, parallel, series} = require("gulp");

const less          = require("gulp-less");
const concat        = require("gulp-concat");
const uglify        = require('gulp-uglify-es').default;
const browserSync   = require('browser-sync').create();
const autoprefixer  = require('gulp-autoprefixer');
const clean  = require('gulp-clean');

function scripts(){
 return src("app/js/main.js")
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function styles() {
  return src("app/less/style.less")
    .pipe(autoprefixer({overrideBrowserlist: ['last 10 version']}))
    .pipe(concat('style.min.css'))
    .pipe(less())
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function watching(){
    watch(['**/*.less'], styles)
    watch(['app/js/main.js'], scripts)
    watch(["app/*.html"]).on('change', browserSync.reload);
}

function browsersync(){
  browserSync.init({
    server: {
        baseDir: "app/"
    }
});
}

function cleanDist(){
  return src('dist')
  .pipe(clean())
}

function buliding() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/**/*.html'
  ], {base :'app'})
  .pipe(dest('dist'))
}

exports.watching     = watching;
exports.styles       = styles;
exports.scripts      = scripts;
exports.browsersync  = browsersync;

exports.build = series(cleanDist, buliding)
exports.default  = parallel(styles, scripts, browsersync, watching);
