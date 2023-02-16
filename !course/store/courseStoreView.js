"use strict";

function courseStoreView() {
  return `
    <nav class="course-nav-layout">
      <div onclick="changeCurrentPage('courseShoppingCartView')">Sjekk handlevogn</div>
    </nav>

    <header class="course-header-layout">
      <h1>Kreativt arbeid med realfag i barnehage</h1>
    </header>

    <hr>

    <section class="course-shop-layout">
      ${allCourses()}
    </section>
    `;
}

function allCourses() {
  let html = "";
  for (let i = 0; i < model.courseStore.length; i++) {
    html += `
        <article class="course-article-layout" onclick="openCourseArticle(${model.courseStore[i].courseId})">

          <img class="course-img" src="${model.courseStore[i].img}">
          <h3>${model.courseStore[i].title}</h3>
          <span>${model.courseStore[i].price}kr</span>

        </article>
        `;
  }

  return html;
}
