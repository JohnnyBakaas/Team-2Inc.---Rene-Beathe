"use strict";

function courseShoppingCartView() {
  return `
    <h1>Kurs handlevogn</h1>

    ${courseShoppingCart()}

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
    <div>
        <span>${user.courseShoppingCart[i].title}</span>

        <span>${user.courseShoppingCart[i].price}</span>

        <button onclick="removeCourseFromShoppingCart(${user.courseShoppingCart[i].courseId})">
            Fjern kurs fra handlekurv
        </button>
    </div>
    `;
  }

  return html;
}
