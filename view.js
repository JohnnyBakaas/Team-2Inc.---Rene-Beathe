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
    case "courseView":
      htmlOut += courseView();
      break;
    case "courseShoppingCartView":
      htmlOut += courseShoppingCartView();
      break;
  }

  htmlOut += makeFooter();
  document.getElementById("root").innerHTML = htmlOut;
};

const makeHeader = () => {
  return /*html*/ `
  <header>
        <div></div>
        <h1 onclick="changeCurrentPage('homePage')">René Beathe</h1>
        
        <nav>
        
            <p onclick="changeCurrentPage('portfolioCollectionView')">Portefølje</p>
            <p onclick="changeCurrentPage('bookingView')">Booking</p>
            <p onclick="changeCurrentPage('courseView')">Kurs</p>
            <p onclick="changeCurrentPage('ecommerceCollectionView')">Merch</p>
            <p onclick="changeCurrentPage('aboutMeView')">Om meg</p>
           
        </nav>

        <p class="toggle-button">
          <p class="bar"></p>
          <p class="bar"></p>
          <p class="bar"></p>
        </p>

    </header>
  `;
};

const makeFooter = () => {
  return /*html*/ `
    <footer>
        <div>
            <h2>Sosiale Medier</h2>
            <article>
                <div style="background-image: url('img/instagram.svg')"></div>
                <div style="background-image: url('img/facebook.svg')"></div>
                <div style="background-image: url('img/twitter.svg')"></div>
                <div style="background-image: url('img/youtube.svg')"></div>
            </article>
        </div>
        <div>
            <h2>Kontakt</h2>
            <p class="hover" onclick="navigator.clipboard.writeText(this.innerHTML);">renebeathehansen@gmail.com</p>
            <p>telefon: 901 83 482</p>
        </div>
        <div>
            <h2>Annet</h2>
            <p>Sett inn noe her</p>
        </div>
    </footer>
    `;
};

view();
