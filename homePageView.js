const makeHomePage = () => {
  return /*html*/ `
        <section class="homeMenuScreen">
            <section class="homePageText">
            
                <h2> Realfag er gøy engasjerende og vakert. </h2>
                <p>
                    "Den røde tråden I alt vi gjør. Det starter I oss selv."
                    
                </p>
                <p>-René Beathe Hansen</p>
            </section>
        </section>

        <section class="post-it-note-container">
             
            <div class="post-it-note note1" onclick="changeCurrentPage('portfolioCollectionView')">
                <h2> Portefølje </h2>
                <p> text content </p>
                <img class="notePicture"src="img/portfolioStickman.svg"/>
            </div>

            <div class="post-it-note note2" onclick="changeCurrentPage('bookingView')">
                <h2> Booking </h2>
                <p> Ego sum qui sum. Milites bene pugnatis. Est tu senilis? Lingua latinae est. </p>
                <img class="notePicture" src="img/bookingStickman.svg"/>
            </div>

            <div class="post-it-note note3" onclick="changeCurrentPage('courseStoreView')">
                <h2> Kurs </h2>
                <p> text content </p>
                <img class="notePicture" src="img/shopStickman.svg"/>
            </div>

            <div class="post-it-note note5" onclick="changeCurrentPage('ecommerceCollectionView')">
                <h2> Merch </h2>
                <p> text content </p>
                <img class="notePicture" style="width:60%;" src="img/lil man.svg"/>
            </div>

            <div class="post-it-note note4" onclick="changeCurrentPage('aboutMeView')">
                <h2> Om meg </h2>
                <p> text content </p>
                <img class="notePicture" src="img/aboutMeStickman.svg"/>
            </div>
        </section>
    `;
};
