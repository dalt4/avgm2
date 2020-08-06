const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');
sass.compiler = require('node-sass');

//----------------------gulp image-------------------------//

gulp.task('img', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('partners', () =>
    gulp.src('app/img/partners/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/partners'))
);

gulp.task('svg', () =>
    gulp.src('app/img/svg/*')
        .pipe(gulp.dest('dist/img/svg'))
);

gulp.task('video', () =>
    gulp.src('app/img/video/*')
        .pipe(gulp.dest('dist/img/video'))
);

gulp.task('image', gulp.parallel('img', 'partners', 'svg', 'video'));


//----------------------gulp build------------------------//

gulp.task('app', () =>
    gulp.src('app/*.{png, xml, php, svg, webmanifest, ico}')
        .pipe(gulp.dest('dist'))
);

gulp.task('pages', () =>
    gulp.src('app/templates/*.php')
        .pipe(gulp.dest('dist/templates'))
);

gulp.task('css', () =>
    gulp.src('app/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'))
);

gulp.task('uglify', () =>
    gulp.src('app/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
);

gulp.task('fonts', () =>
    gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
);

gulp.task('libs', () =>
    gulp.src('app/libs/*')
        .pipe(gulp.dest('dist/libs'))
);

gulp.task('build', gulp.parallel('app','pages', 'css', 'uglify', 'fonts', 'libs'));

//--------------------gulp default------------------------//
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'AVGM2',
        notify: false
    });
});

gulp.task('sass', function () {
    return gulp.src('app/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 version', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function () {
    return gulp.src('app/scripts/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function () {
    return gulp.src('app/**/*.php')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function () {
    gulp.watch('app/*.scss', gulp.parallel('sass'));
    gulp.watch('app/**/*.php', gulp.parallel('code'));
    gulp.watch('app/scripts/*.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));