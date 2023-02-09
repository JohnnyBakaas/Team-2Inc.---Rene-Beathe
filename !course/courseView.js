"use strict";

function courseView() {
  return `
    <nav class="course-nav-layout">
      <span onclick="changeCurrentPage('courseShoppingCartView')">Sjekk handlevogn</span>
    </nav>

    <header class="course-header-layout">
      <h1>Kreativt arbeid med realfag i barnehage</h1>
    </header>

    <hr>

    <div class="display-msg-layout">

      <div id="displayMsg" style="display:none">
        <p>Kurset er allerede lagt til i handlevognen.</p>
        <button onclick="closeMessage()">LUKK</button>
      </div>

    </div>

    <section class="course-shop-layout">
      ${allCourses()}
    </section>
    `;
}

function allCourses() {
  let html = "";
  for (let i = 0; i < model.courseStore.length; i++) {
    html += `
        <article class="course-article-layout">

          <img class="course-img" src="${model.courseStore[i].img}">
          <h3>${model.courseStore[i].title}</h3>
          <span>${model.courseStore[i].price}kr</span>
          <button onclick="addToCourseShoppingCart(${model.courseStore[i].courseId})">
          LEGG TIL I HANDLEVOGN
          </button>

        </article>
        `;
  }

  return html;
}
