const gulp = require('gulp');
const path = require('node:path');
const { Transform } = require('node:stream');

// For inlining images in CSS
const postcss = require('gulp-postcss');
const imageInliner = require('postcss-image-inliner');
const { inlineSource } = require('inline-source');

gulp.task('inline-css-images', function() {
    const opts = {
        assetPaths: ['./jacoco/jacoco-resources'],
    };

    const plugins = [
        imageInliner(opts),
    ];

    return gulp.src('./jacoco/**/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./jacoco'));
});

function inlineHtmlSources() {
    return new Transform({
        objectMode: true,
        transform: async function(file, encoding, callback) {
            if (file.isNull()) {
                callback(null, file);
                return;
            }

            if (file.isStream()) {
                callback(new Error('Streaming HTML files is not supported'));
                return;
            }

            try {
                const inlinedHtml = await inlineSource(file.contents.toString(encoding), {
                    attribute: false,
                    compress: false,
                    rootpath: path.dirname(file.path),
                });

                file.contents = Buffer.from(inlinedHtml);
                callback(null, file);
            } catch (error) {
                callback(error);
            }
        },
    });
}

gulp.task('inline-sources', function () {
    return gulp.src('./jacoco/**/*.html')
        .pipe(inlineHtmlSources())
        .pipe(gulp.dest('./jacoco-inline'));
});
