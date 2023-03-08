const portfolioColectionView = () => {
  let theHTML = "<div class='portfolioArticlColection'>";
  model.portfolioArticles.forEach((p) => {
    theHTML += `
      <article class="portfolioArticl" 
      onclick="selectPortfolioArticle(${p.articleId})">
        <h2> ${p.title} </h2>
        <div>
          <img src="${p.img}" alt="${p.img}">
          <p> ${findFirstText(p.content)} </p>
        </div>
      </article>
    `;
  });
  theHTML += "</div>";
  return theHTML;
};

const findFirstText = (articleContnt) => {
  let kake = [];
  articleContnt.forEach((p) => {
    if (p.text) kake.push(p.text);
  });
  return kake[0];
};
