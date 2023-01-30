"use strict";

function yourShoppingCartView() {
  return `
  <section>
    <h1>Din handlevogn</h1>

    ${yourShoppingCart()}

  </section>
  `;
}

function yourShoppingCart() {
  const userIdIndex = model.users.findIndex(function (obj) {
    return obj.userId === model.app.currentUser;
  });

  let html = "";
  for (let i = 0; i < model.users[userIdIndex].shoppingCart.length; i++) {
    const shoppingCart = model.users[userIdIndex].shoppingCart;

    html += `
    <div class="your-shoppingcart">
      <span>${shoppingCart[i].title}</span>
    </div>
    `;
  }

  return html;
}
