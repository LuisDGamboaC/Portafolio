const { src, dest, watch, parallel } = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// Javascript
const  terser = require('gulp-terser-js');

function css(cb) {
    src("src/scss/**/*.scss")// Identificar el archivo de SASS
        .pipe(sourcemaps.init())
        .pipe(plumber()) // Compilarlo
        .pipe(sass()) // Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()])) // Compilarlo
        .pipe(sourcemaps.write('.'))
        .pipe(dest("built/css"))//almacenar en el disco duro

    cb();// Callback que avisa a gulp cuando lleguemos al final
}

function imagenes(cb) {
    const opciones = {
        optimizatinoLevel:3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin()))
        .pipe(dest('built/img'))
    cb();
}

function versionWebp (cb){
    const opciones = {
        quality:50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('built/img'))
    cb();
}

function versionAvif (cb){
    const opciones = {
        quality:50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('built/img'))
    cb();
}

function javascript(cb){
        src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe( terser() )
        .pipe(sourcemaps.write('.'))
        .pipe(dest('built/js'));

    cb();
}

function dev(Callback){
    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", javascript);
    Callback();
}

exports.css = css;
exports.js = javascript;
exports.imagenes =imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);