
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var elixir = require('laravel-elixir');

var gulp = require('gulp');

var ts = require('gulp-typescript');

var notify = require("gulp-notify");

var typescriptPath = "resources/assets/typescript/**/*";

elixir(function(mix) {

    // All theme css/sass is pulled into app.scss
    mix.sass('app.scss');

    // Copy all needed angular modules to public directory
    mix.copy('node_modules/core-js', 'public/node_modules/core-js');
    mix.copy('node_modules/rxjs', 'public/node_modules/rxjs');
    mix.copy('node_modules/@angular', 'public/node_modules/@angular');
    // Add Dist directory as root, Otherwise elixir picks it as a file
    mix.copy('node_modules/zone.js/dist', 'public/node_modules/zone.js/dist');
    mix.copy('node_modules/reflect-metadata', 'public/node_modules/reflect-metadata');
    mix.copy('node_modules/systemjs', 'public/node_modules/systemjs');
    mix.copy('resources/assets/config/systemjs.config.js', 'public/js/systemjs.config.js');
    // copy all component templates to public typescript folders
    mix.copy(typescriptPath + ".html",'public/app');
    // copy all component styles to public typescript folders
    mix.copy(typescriptPath + ".css",'public/app');

    // compile typescript
    mix.task('typescript');

});

gulp.task("watch-typescript", function() {
    gulp.watch(typescriptPath + ".ts", ["compile-typescript"]);
    gulp.watch(typescriptPath + ".html", ["copy-typescript-templates"])
    gulp.watch(typescriptPath + ".css", ["copy-typescript-styles"])
});

gulp.task('build-typescript', [
    "compile-typescript",
    "copy-typescript-templates",
    "copy-typescript-styles"
]);

gulp.task("copy-typescript-templates", function () {
    gulp.src(typescriptPath + ".html")
        .pipe(gulp.dest( "public/app" ))
        .pipe(notify("templates copied"))
});

gulp.task("copy-typescript-styles", function () {
    gulp.src(typescriptPath + ".css")
        .pipe(gulp.dest( "public/app" ))
        .pipe(notify("styles copied"))
});

// create new task for typescript compiling
gulp.task("compile-typescript", function() {

    // declare the root directory of typescript files
    gulp.src(typescriptPath + ".ts")

        // Compile javascript with gulp-typescript
        .pipe(ts({
            "target": "ES6",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "removeComments": false,
            "noImplicitAny": false,
            "experimentalDecorators": true,
            "exclude": [
                "node_modules"
            ]
        }))

        // Save compiled type-script files to public directory
        .pipe(gulp.dest( "public/app" ))
        .pipe(notify("Typescript Compiled"));
});


