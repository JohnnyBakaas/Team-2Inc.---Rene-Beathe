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

        <section class="post-it-note-container">
            
<div class="post-it-note note1" onclick="changeCurrentPage('portfolioCollectionView')">
                <h2> Portefølje </h2>
                <p> text content </p>
            </div>
<div class="post-it-note note2" onclick="changeCurrentPage('bookingView')">
                <h2> Booking </h2>
                <p> text content </p>
            </div>
<div class="post-it-note note3" onclick="changeCurrentPage('ecommerceCollectionView')">
                <h2> Nettbutikk </h2>
                <p> text content </p>
            </div>
<div class="post-it-note note4" onclick="changeCurrentPage('AboutMeView')">
                <h2> Om meg </h2>
                <p> text content </p>
            </div>
        </section>
    `;
};