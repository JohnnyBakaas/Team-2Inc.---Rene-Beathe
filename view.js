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
    case "portfolioColectionView": // Fiks
      htmlOut += portfolioColectionView();
      break;
    case "bookingView":
      htmlOut += bookingView();
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
            <p onclick="changeCurrentPage('portfolioColectionView')">Portefølje</p>
            <p onclick="changeCurrentPage('bookingView')">Booking</p>
            <p>Nettbutikk</p>
            <p onclick="changeCurrentPage('aboutMeView')">Om meg</p>
        </nav>
    </header>
  `;
};

const makeFooter = () => {
  return /*html*/ `
        <footer>
            <div>
                legg til sosialemedie greier her
            </div>
            <div class="dette-er-ikke-hvordan-man-gjør-det"></div>
            <div>
                Kontakt informasjon
            </div>
            <div class="dette-er-ikke-hvordan-man-gjør-det"></div>
            <div>
                noe annet
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
