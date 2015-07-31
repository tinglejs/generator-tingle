// https://github.com/gulpjs/gulp/tree/master/docs
var gulp = require('gulp');
var fs = require('fs');

var webpack = require('webpack');

// http://browsersync.io/
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// https://github.com/floridoo/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// https://github.com/stevelacy/gulp-stylus
var stylus = require('gulp-stylus');

// https://github.com/wearefractal/gulp-concat
var concat = require('gulp-concat');

// https://www.npmjs.com/package/gulp-just-replace/
var replace = require('gulp-just-replace');

var gulpUniqueFile = require('gulp-unique-files');
var pathMap = require('gulp-pathmap');

//make inline svg
var svgSymbols = require('gulp-svg-symbols');
var injectStr  = require('gulp-inject-string');
var removeHtml = require('gulp-html-remove');

gulp.task('pack_demo', function(cb) {
    webpack(require('./webpack.dev.js'), function (err, stats) {
        // 重要 打包过程中的语法错误反映在stats中
        console.log('webpack log:' + stats);
        if(err) cb(err);
        console.info('###### pack_demo done ######');
        cb();
    });
});

gulp.task('stylus_component', function(cb) {
    gulp.src(['./src/**/*.styl'])
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src'));
    console.info('###### stylus_component done ######');
    cb();
});

gulp.task('stylus_demo', function(cb) {
    gulp.src(['./tingle/**/*.css','./demo/**/*.styl','!./tingle/tingle-style/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(concat('<%= ComponentName %>Demo.css'))
        .pipe(replace([{
            search: /\/\*#\ssourceMappingURL=([^\*\/]+)\.map\s\*\//g,
            replacement: '/* end for `$1` */\n'
        }]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./demo'));
    console.info('###### stylus_demo done ######');
    cb();
});

gulp.task('svg_sprite', function () {
    return gulp.src([
        './src/svg/**/*.svg',
        './tingle/*/src/svg/**/*.svg'
    ])
        .pipe(pathMap('%f'))
        .pipe(gulpUniqueFile())
        .pipe(svgSymbols({
            templates: ['default-svg']
        }))
        .pipe(gulp.dest('./dist'));
});

// 将svg插入到html页面
gulp.task('svg_inject', ['svg_sprite'], function (cb) {
    gulp.src('index.html')
        .pipe(removeHtml({ attrs : { 'xmlns' : ['http://www.w3.org/2000/svg'] }}))
        .pipe(injectStr.before('</body>', fs.readFileSync('./dist/svg-symbols.svg', {encoding: 'utf-8'})))
        .pipe(gulp.dest('.'));
    console.info('###### svg source inject done ######');
    cb();
});

gulp.task('reload_by_js', ['pack_demo'], function () {
    reload();
});

gulp.task('reload_by_component_css', ['stylus_component'], function () {
    reload();
});

gulp.task('reload_by_demo_css', ['stylus_demo'], function () {
    reload();
});

gulp.task('reload_by_svg', ['svg_inject'], function () {
    reload();
});

// 开发`Tingle component`时，执行`gulp develop` or `gulp d`
gulp.task('develop', [
    'pack_demo',
    'stylus_component',
    'stylus_demo',
    'svg_inject'
], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['src/**/*.js', 'demo/**/*.js'], ['reload_by_js']);

    gulp.watch('src/**/*.styl', ['reload_by_component_css']);

    gulp.watch('demo/**/*.styl', ['reload_by_demo_css']);

    // 监听svg icon文件的变化
    gulp.watch([
        'src/svg/tingle/*.svg', // 来自tingle提供的icon
        'src/svg/custom/*.svg'  // 控件自定义的icon
    ], ['reload_by_svg']);
});

// 快捷方式
gulp.task('d', ['develop']);