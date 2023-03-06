function courseArticleView() {
  return `
  <nav class="course-nav-layout">
    <div onclick="changeCurrentPage('courseShoppingCartView')">Sjekk handlevogn</div>
  </nav>

  <div class="display-msg-layout">
    <div id="displayMsg" style="display:none">
      <p>Kurset er allerede lagt til i handlevognen.</p>
      <button onclick="closeMessage()">LUKK</button>
    </div>
  </div>
  
  <article class="course-current-article">
    <div class="top-side">
      <div class="left-side">
        <img class="course-current-article-img" src="${
          model.courseStore[model.inputs.currentCourseArticle].img
        }">
      </div>

      <div class="right-side">
        <h2>${model.courseStore[model.inputs.currentCourseArticle].title}</h2>
        <p>${model.courseStore[model.inputs.currentCourseArticle].price}kr</p>
        <button onclick="addToCourseShoppingCart(${
          model.courseStore[model.inputs.currentCourseArticle].courseId
        })">LEGG TIL I HANDLEVOGN</button>
      </div>
    </div>

    <div class="bottom-side">
      <p>${model.courseStore[model.inputs.currentCourseArticle].description}</p>
    </div>
  </article>
  `;
}
