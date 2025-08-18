const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const del = require('del');

// Paths
const paths = {
    html: {
        src: 'src/html/*.html',
        dest: 'dist/'
    },
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    clean: 'dist/*'
};

// Clean task
function clean() {
    return del([paths.clean]);
}

// HTML task
function html() {
    return src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest(paths.html.dest));
}

// Styles task
function styles() {
    return src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Scripts task
function scripts() {
    return src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

// Watch task
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    watch(paths.html.src, html);
    watch(paths.styles.src, styles);
    watch(paths.scripts.src, scripts);
}

// Default task
exports.default = series(clean, parallel(html, styles, scripts), watchFiles);