"use strict";

function courseShoppingCartView() {
  return `
    <nav class="course-nav-layout">
      <button onclick="changeCurrentPage('courseView')">Tilbake til kursbutikk</button>
    </nav>

    <header class="course-header-layout">
      <h1>Handlevogn</h1>
    </header>

    <hr>

    <main class="course-shopping-cart-layout">
      ${courseShoppingCart()}
    </main>
    `;
}

function courseShoppingCart() {
  const userIndex = model.users.findIndex(function (obj) {
    return obj.userId === model.app.currentUser;
  });

  const user = model.users[userIndex];

  let html = "";
  for (let i = 0; i < user.courseShoppingCart.length; i++) {
    html += `
    <article class="course-article-layout">

        <img class="course-img" src="${model.courseStore[i].img}">
        <h3>${user.courseShoppingCart[i].title}</h3>
        <span>${user.courseShoppingCart[i].price}kr</span>
        <button onclick="removeCourseFromShoppingCart(${user.courseShoppingCart[i].courseId})">
          FJERN KURS FRA HANDLEVOGN
        </button>

    </article>
    `;
  }

  return html;
}
