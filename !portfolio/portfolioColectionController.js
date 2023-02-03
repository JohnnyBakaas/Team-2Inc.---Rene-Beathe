const selectPortfolioArticle = (articleId) => {
  model.portfolioArticles.find((x) => {
    if (x.articleId == articleId) {
      model.app.article = x;
    }
  });
  changeCurrentPage("portfolioArticlesView");
};
