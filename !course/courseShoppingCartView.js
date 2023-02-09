"use strict";

function courseShoppingCartView() {
  return `
    <nav class="course-nav-layout">
      <span onclick="changeCurrentPage('courseView')">Tilbake til kurs</span>
    </nav>

    <header class="course-header-layout">
      <h1>Handlevogn</h1>
    </header>

    <hr>

    <section class="course-shopping-cart-layout">
      ${courseShoppingCart()}
    </section>

    <section class="course-shopping-cart-total-price">
      ${totalPrice()}
    </section>
    `;
}

function courseShoppingCart() {
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];

  if (user.courseShoppingCart.length === 0) {
    return "<p>Handlevognen din er tom.</p>";
  }

  let html = "";
  for (let i = 0; i < user.courseShoppingCart.length; i++) {
    html += `
    <article class="course-article-layout">

        <img class="course-img" src="${user.courseShoppingCart[i].img}">
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

function totalPrice() {
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];

  if (user.courseShoppingCart.length === 0) {
    return "";
  }

  return `
      <span>Til sammen</span>
      <span>kr</span>
      <button>Fortsett</button>
      `;
}
