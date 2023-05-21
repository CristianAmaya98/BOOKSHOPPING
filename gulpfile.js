const { src, dest, series, parallel, watch } = require("gulp");

// CSS Y SASS
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

// HTML
const htmlmin = require("gulp-htmlmin");
const fileinclude = require("gulp-file-include");

// WEB SERVER
const connect = require("gulp-connect");

const config = {
  production: true,
  js: {
    input: "src/js/*.js",
    ouput: "dist/js",
    watchAndReload: "src/js/**/*.js"
  },
  sass: {
    input: "src/scss/app.scss",
    ouput: "dist/css",
    watchAndReload: "src/scss/**/*.scss"
  },
  html: {
    inputs: "src/*.html",
    ouput: "dist",
    watchAndReload: "src/**/*.html"
  },
  server: {
    name: "BOOKSHOPPING",
    root: "dist",
    port: 3070
  }
};

function compilarJS() {
  return src(config.js.input)
    .pipe(dest(config.js.ouput))
    .pipe(connect.reload());
}

function compilarHtml() {
  return src(config.html.inputs)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: config.production,
        removeComments: config.production
      })
    )
    .pipe(dest(config.html.ouput))
    .pipe(connect.reload());
}

function compilarSass() {
  return src(config.sass.input)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: false ? "compressed" : "expanded"
      }).on("error", sass.logError)
    )
    // .pipe(
    //   autoprefixer({
    //     cascade: false
    //   })
    // )
    // .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(dest(config.sass.ouput))
    .pipe(connect.reload());
}

function connectLiveReload() {
  connect.server({
    name: config.server.name,
    root: config.server.root,
    livereload: true,
    port: config.server.port
  });
}

function watchAndReload() {
  watch(config.html.watchAndReload, compilarHtml);
  watch(config.sass.watchAndReload, compilarSass);
  watch(config.js.watchAndReload, compilarJS);
}

exports.default = series(
  compilarHtml,
  compilarSass,
  compilarJS,
  parallel(watchAndReload, connectLiveReload)
);
