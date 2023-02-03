"use strict";
const portfolioArticleView = () => {
  let theHTML = `
    <section class="spesificPortfolioArticle">
      <section>
        <h2>${model.app.article.title}</h2>
        <img src="${model.app.article.img}" alt="${model.app.article.img}">
      </section>
    `;

  for (let i = 0; i < model.app.article.content.length; i++) {
    theHTML += "<section>";
    if (model.app.article.content[i].text) {
      theHTML += `<p> ${model.app.article.content[i].text}</p>`;
    } else if (model.app.article.content[i].img) {
      theHTML += `<img src="${model.app.article.content[i].img}" 
            alt="${model.app.article.content[i].img}">`;
    } else {
      console.log(
        "Det har blitt lagt til noe som ikke støttes av portfolioArticlesView(). Venligs ta kontakt med Admin"
      );
    }
    theHTML += "</section>";
  }
  theHTML += "</section>";

  return theHTML;
};
