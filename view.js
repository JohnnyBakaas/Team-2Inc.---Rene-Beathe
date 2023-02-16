"use strict";

const view = () => {
  let htmlOut = makeHeader();

  switch (model.app.state) {
    case "homePage":
      htmlOut += makeHomePage();
      break;
    case "aboutMeView":
      htmlOut += aboutMeView();
      break;
    case "loginView":
      htmlOut += loginView();
      break;
    case "registerView":
      htmlOut += registerView();
      break;
    case "portfolioArticlesView":
      htmlOut += portfolioArticleView();
      break;
    case "portfolioCollectionView":
      htmlOut += portfolioColectionView();
      break;
    case "bookingView":
      htmlOut += bookingView();
      break;
    case "ecommerceCollectionView":
      htmlOut += ecommerceColectionView();
      break;
    case "ecommerceArticleView":
      htmlOut += ecommerceArticleView();
      break;
    case "yourStoreOrdersView":
      htmlOut += yourStoreOrdersView();
      break;
    case "yourShoppingCartView":
      htmlOut += yourShoppingCartView();
      break;
    case "courseStoreView":
      htmlOut += courseStoreView();
      break;
    case "courseShoppingCartView":
      htmlOut += courseShoppingCartView();
      break;
    case "courseCheckoutView":
      htmlOut += courseCheckoutView();
      break;
    case "storeCheckoutView":
      htmlOut += checkOutView();
      break;
    case "courseArticleView":
      htmlOut += courseArticleView();
      break;
  }

  htmlOut += makeFooter();
  document.getElementById("root").innerHTML = htmlOut;
};

const makeHeader = () => {
  return /*html*/ `
  <header>
    <div></div>
    <h1 class="hover" onclick="changeCurrentPage('homePage')">René Beathe</h1>
    <span class="toggle-button" onclick="togleNav()">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </span>
    <nav>
      <p class="hover" onclick="changeCurrentPage('portfolioCollectionView')">Portefølje</p>
      <p class="hover" onclick="changeCurrentPage('bookingView')">Booking</p>
      <p class="hover" onclick="changeCurrentPage('courseStoreView')">Kurs</p>
      <p class="hover" onclick="changeCurrentPage('ecommerceCollectionView')">Merch</p>
      <p class="hover" onclick="changeCurrentPage('aboutMeView')">Om meg</p>
    </nav>
  </header>

  <nav class="mobileHeader">
    <p class="hover" onclick="changeCurrentPage('portfolioCollectionView')">Portefølje</p>
    <p class="hover" onclick="changeCurrentPage('bookingView')">Booking</p>
    <p class="hover" onclick="changeCurrentPage('courseStoreView')">Kurs</p>
    <p class="hover" onclick="changeCurrentPage('ecommerceCollectionView')">Merch</p>
    <p class="hover" onclick="changeCurrentPage('aboutMeView')">Om meg</p>
  </nav>
  `;
};

const makeFooter = () => {
  return /*html*/ `
    <footer>
        <div>
            <h2>Sosiale Medier</h2>
            <article>
                <div class="hover" style="background-image: url('img/instagram.svg')"></div>
                <div class="hover" style="background-image: url('img/facebook.svg')"></div>
                <div class="hover" style="background-image: url('img/twitter.svg')"></div>
                <div class="hover" style="background-image: url('img/youtube.svg')"></div>
            </article>
        </div>
        <div>
            <h2>Kontakt</h2>
            <p class="hover" onclick="navigator.clipboard.writeText(this.innerHTML);">renebeathehansen@gmail.com</p>
            <p>telefon: 901 83 482</p>
        </div>
    </footer>
    `;
};

window.addEventListener("load", function () {
  view();
});
