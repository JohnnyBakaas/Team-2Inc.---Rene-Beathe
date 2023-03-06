const ecommerceArticleView = () => {
  const article = model.storeArticles.find(
    (e) => e.articleId == model.inputs.currentArticle
  );

  console.log(article);

  let theHTML = `
    ${makeStoreNavbar()}

    <article class="articleViewFocused">
        <section style="flex-direction: row">
            <h1>
                ${article.title}
                
            </h1>
            <br/>
            <button onclick="changeCurrentPage('ecommerceCollectionView')">Gå tilbake</button>
        </section>
        <section class="articleViewFlex">
            <article>
                <div style="background-image: url('${article.img}')"></div>
            </article>
            <article class="articleBuySection">
                ${article.colors ? makeColorSelection(article.colors) : ""}
                <h2>Pris</h2>
                <p>${article.price} kr</p>
                <button onclick="addToShoppingCart(${[
                  model.inputs.currentArticle,
                ]})">Legg til i handlevogn</button>
            </article>
        </section>
        <section>
            <h2>Beskrivelse</h2>
            <p>${article.description}
            </p>
        </section>
    </article>

    `;
  return theHTML;
};

const makeColorSelection = (colors) => {
  let theHTML = "";
  colors.forEach((e) => {
    theHTML += `
    <button class="storeColorSelection" onclick="shoppingCartColor('${e.text}', '${e.css}')">
      <p>${e.text}</p>
      <div style="background-color:${e.css};" 
        class="storeColorSelectionSquare">
      </div>
    </button>
    `;
  });
  return theHTML;
};
