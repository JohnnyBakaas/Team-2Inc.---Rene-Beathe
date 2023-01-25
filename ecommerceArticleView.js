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
                <h2>Pris</h2>
                <p>${
                  model.storeArticles[model.inputs.currentArticle].price
                } kr</p>
                <button>Kjøp</button>
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
