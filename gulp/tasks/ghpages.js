import ghPages from "gulp-gh-pages";

export const ghPagesTask = () => {
   app.gulp.task('deploy' ,() => {
      return app.gulp.src(`./${buildFolder}/**/*`)
      .pipe(ghPages());
   })
}