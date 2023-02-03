const selectPortfolioArticle = (inputArticleId) => {
  model.portfolioArticles.find((x) => {
    if (x.articleId == inputArticleId) {
      model.app.article = x;
    }
  });
  changeCurrentPage("portfolioArticlesView");
};
