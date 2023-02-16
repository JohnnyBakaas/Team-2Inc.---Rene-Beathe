const courseArticleView = () => {
  let theHTML = `
  <nav class="course-nav-layout">
  <div onclick="changeCurrentPage('courseShoppingCartView')">Sjekk handlevogn</div>
</nav>

<header class="course-header-layout">
  <h1>Kreativt arbeid med realfag i barnehage</h1>
</header>
  
      <article class="articleViewFocused">
          <section style="flex-direction: row">
              <h1>
                  ${model.courseStore[model.inputs.currentCourseArticle].title}
              </h1>
              <br/>
              <button onclick="changeCurrentPage('courseStoreView')">Gå tilbake</button>
          </section>
          <section class="articleViewFlex">
              <article>
                  <div style="background-image: url('${
                    model.courseStore[model.inputs.currentCourseArticle].img
                  }')"></div>
              </article>

      <div class="display-msg-layout">
          <div id="displayMsg" style="display:none">
              <p>Kurset er allerede lagt til i handlevognen.</p>
              <button onclick="closeMessage()">LUKK</button>
          </div>
      </div>

              <article class="articleBuySection">

                  <h2>Pris</h2>
                  <p>${
                    model.courseStore[model.inputs.currentCourseArticle].price
                  } kr</p>
                  <button onclick="addToCourseShoppingCart(${
                    model.courseStore[model.inputs.currentCourseArticle]
                      .courseId
                  })">
                  LEGG TIL I HANDLEVOGN
                  </button>

              </article>
          </section>
          <section>
              <h2>Beskrivelse</h2>
              <p>${
                model.courseStore[model.inputs.currentCourseArticle].description
              }
              </p>
          </section>
      </article>
  
      `;
  return theHTML;
};
