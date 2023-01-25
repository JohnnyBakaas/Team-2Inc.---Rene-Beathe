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
    case "portfolioArticlesView": // Fiks >:|
      htmlOut += portfolioArticleView();
      break;
    case "portfolioCollectionView": // Fiks
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
  }

  htmlOut += makeFooter();
  document.getElementById("root").innerHTML = htmlOut;
};

const makeHeader = () => {
  return /*html*/ `
  <header>
        <div></div>
        <h1>René Beathe</h1>
        <nav>
            <p onclick="changeCurrentPage('portfolioCollectionView')">Portefølje</p>
            <p onclick="changeCurrentPage('bookingView')">Booking</p>
            <p onclick="changeCurrentPage('ecommerceCollectionView')">Nettbutikk</p>
            <p onclick="changeCurrentPage('aboutMeView')">Om meg</p>
        </nav>
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
            <p>renebeathehansen@gmail.com</p>
            <p>telefon: 901 83 482</p>
        </div>
        <div>
            <h2>Annet</h2>
            <p>Sett inn noe her</p>
        </div>
    </footer>
    `;
};

const makeHomePage = () => {
  return /*html*/ `
        <section>
            <img h-ref="img/#" alt="Forside bilde">
            <section>
                <h2> Allmenfag for eller noe </h2>
                <p>
                    Masse tekst om hvor fantastisk Rene Beathe er 
                    eller noe c2a aktig
                </p>
            </section>
        </section>

        <section>
            <div class="post-it-note">
                <h2> Om meg </h2>
                <p> text content </p>
            </div>
        </section>
    `;
};
view();
