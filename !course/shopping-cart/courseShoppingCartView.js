"use strict";

function courseShoppingCartView() {
  return `
    <nav class="course-nav-layout">
      <div onclick="changeCurrentPage('courseStoreView')">Tilbake til kurs</div>
    </nav>

    <header class="course-header-layout">
      <h1>Handlevogn</h1>
    </header>

    <hr>

    <section class="course-shopping-cart-layout">
      ${courseShoppingCart()}
    </section>

    <section>
      ${toCheckout()}
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
    <article class="course-article-layout noHover">

        <img class="course-img" src="${user.courseShoppingCart[i].img}">
        <h3>${user.courseShoppingCart[i].title}</h3>
        <div>${user.courseShoppingCart[i].price}kr</div>
<button class="pay" onclick="removeCourseFromShoppingCart(${user.courseShoppingCart[i].courseId})">Fjern</button>

    </article>
    `;
  }

  return html;
}

function toCheckout() {
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];

  if (user.courseShoppingCart.length === 0) {
    return "";
  }

  return `
    <div class="course-to-check-out-layout">
      <span>TIL SAMMEN</span>
      <span>${getTotalPrice()}kr</span>
      <button onclick="changeCurrentPage('courseCheckoutView')">FORTSETT</button>
    </div>
    `;
}

function getTotalPrice() {
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];

  let totalPrice = 0;
  for (let i = 0; i < user.courseShoppingCart.length; i++) {
    totalPrice += user.courseShoppingCart[i].price;
  }

  return totalPrice;
}
