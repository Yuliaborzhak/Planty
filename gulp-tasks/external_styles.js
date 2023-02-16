"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
// import gulpif from "gulp-if";
// import rename from "gulp-rename";
// import dartsass from "sass";
import gulpsass from "gulp-sass";
// import mincss from "gulp-clean-css";
// import groupmedia from "gulp-group-css-media-queries";
// import autoprefixer from "gulp-autoprefixer";
// import sourcemaps from "gulp-sourcemaps";
// import plumber from "gulp-plumber";
// import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";

// const sass = gulpsass(dartsass);
// const argv = yargs.argv,
//     production = !!argv.production;

gulp.task("external_styles", () => {
    return gulp.src(paths.external_styles.src)
        .pipe(gulp.dest(paths.external_styles.dist))
        .pipe(debug({
            "title": "external_styles"
        }));
});