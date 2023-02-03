const ecommerceArticleView = () => {
  let theHTML = `
    ${makeStoreNavbar()}

    <article class="articleViewFocused">
        <section style="flex-direction: row">
            <h1>
                ${model.storeArticles[model.inputs.currentArticle].title}
                
            </h1>
            <br/>
            <button onclick="changeCurrentPage('ecommerceCollectionView')">Gå tilbake</button>
        </section>
        <section class="articleViewFlex">
            <article>
                <div style="background-image: url('${
                  model.storeArticles[model.inputs.currentArticle].img
                }')"></div>
            </article>
            <article class="articleBuySection">
                ${
                  model.storeArticles[model.inputs.currentArticle].colors
                    ? makeColorSelection(
                        model.storeArticles[model.inputs.currentArticle].colors
                      )
                    : ""
                }
                <h2>Pris</h2>
                <p>${
                  model.storeArticles[model.inputs.currentArticle].price
                } kr</p>
                <button onclick="addToShoppingCart(${[
                  model.inputs.currentArticle,
                ]})">Legg til i handlevogn</button>
            </article>
        </section>
        <section>
            <h2>Beskrivelse</h2>
            <p>${model.storeArticles[model.inputs.currentArticle].description}
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
    <button class="storeColorSelection">
      <p>${e.text}</p>
      <div style="background-color:${e.css};" 
        class="storeColorSelectionSquare">
      </div>
    </button>
    `;
  });
  return theHTML;
};
