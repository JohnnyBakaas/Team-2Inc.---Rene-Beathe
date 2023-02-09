const ecommerceColectionView = () => {
  let theHTML = /*html*/ `
    ${makeStoreNavbar()}
    <section class="ecommerce-section">
      <aside>
        <h2> Filter </h2>
        ${makeStoreFilters()}
      </aside>
      <article class="articleCollection">
        ${makeStoreArticles()}
      </article>
    </section>
    `;

  return theHTML;
};

const makeStoreNavbar = () => {
  let navbarHTML = "";

  if (model.app.currentUser) {
    navbarHTML += `
  <section>
        <nav>
            <button onclick="changeCurrentPage('yourShoppingCartView')"> Handlevogn </button>
            <button onclick="changeCurrentPage('yourStoreOrdersView')"> Dine bestillinger </button>
            <button onclick="logOut()"> Logg ut </button>
        </nav>
    </section>
  `;
  } else {
    navbarHTML += `
    <section>
        <nav>
            <button onclick="changeCurrentPage('loginView')"> Logg inn </button>
        </nav>
    </section>
    `;
  }

  return navbarHTML;
};

const makeStoreArticles = () => {
  let storeArticles = "";

  if (model.inputs.shoppingFilter === "") {
    model.storeArticles.forEach((e) => {
      storeArticles += `
            <article class="salgsArtikkel" onclick="openArticle(${e.articleId})">
            <div class="storeArticleImg" style="background-image: url('${e.img}')"></div>
            <h4> ${e.title} </h4>
           <p>Pris:${e.price}Kr</p>
            </article>
            `;
    });
  } else {
    model.storeArticles.forEach((e) => {
      let boool = false;

      e.category.forEach((f) => {
        if (f == model.inputs.shoppingFilter) boool = true;
      });

      if (boool) {
        storeArticles += `
            <article class="salgsArtikkel" onclick="openArticle('${e.articleId}')">
            <div class="storeArticleImg" style="background-image: url('${e.img}')"></div>
            <h4> ${e.title}</h4>
            <p>Pris:${e.price}Kr</p>
            </article>
        `;
      }
    });
  }

  return storeArticles;
};

const makeStoreFilters = () => {
  let filters = "";

  model.storeArticles.forEach((e) => {
    e.category.forEach((f) => {
      if (!filters.includes(f))
        model.inputs.shoppingFilter == f
          ? (filters += `<button class="selected" onclick="removeEcommerceFilter('${f}')">${f}</button>`)
          : (filters += `<button onclick="selectEcommerceFilter('${f}')">${f}</button>`);
    });
  });
  return filters;
};
