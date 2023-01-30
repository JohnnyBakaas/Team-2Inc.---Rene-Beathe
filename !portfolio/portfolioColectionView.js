const portfolioColectionView = () => {
  let theHTML = "";
  model.portfolioArticles.forEach((p) => {
    theHTML += `
      <article>
        <h2> ${p.title} </h2>
        <img src="${p.img}" alt="${p.img}">
        <p> ${findFirstText(p.content)} </p>
      </article>
    `;
  });
  return theHTML;
};

const findFirstText = (articleContnt) => {
  articleContnt.forEach((p) => {
    if (p.text) return p.text;
  });
};
