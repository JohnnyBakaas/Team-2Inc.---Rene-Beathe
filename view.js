const view = () => {
  let htmlOut = "";
  htmlOut += makeHeader();
  // bytt ut med switch case greier
  if (model.app.state == "homePage") htmlOut += makeHomePage();
  htmlOut += makeFooter();
  document.getElementById("root").innerHTML = htmlOut;
};

const makeHeader = () => {
  return /*html*/ `
        <header>
            <h1>Rene Beathe</h1>
            <div class="the-hamburgeler">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <nav> 
                <ul>
                    <li> Portefølje </li>
                    <li> Booking </li>
                    <li> Nettbutikk </li>
                    <li> Om meg </li>
                </ul> 
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
