const portfolioColectionView = () => {
  let theHTML = "";
  model.portfolioArticles.forEach((p) => {
    theHTML += `
      <article class="portfolioArticl" 
      onclick="selectPortfolioArticle(${p.articleId})">
        <h2> ${p.title} </h2>
        <img src="${p.img}" alt="${p.img}">
        <p> ${findFirstText(p.content)} </p>
      </article>
    `;
  });
  return theHTML;
};

const findFirstText = (articleContnt) => {
  let kake = [];
  articleContnt.forEach((p) => {
    if (p.text) kake.push(p.text);
  });
  return kake[0];
};
