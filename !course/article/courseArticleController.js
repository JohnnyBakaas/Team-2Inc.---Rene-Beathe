const openCourseArticle = (id) => {
  model.app.state = "courseArticleView";
  model.inputs.currentCourseArticle = id;

  view();
};
