"use strict";

function yourShoppingCartView() {
  return `
  <section>
    <h1>Din handlevogn</h1>

    ${shoppingCart()}

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

const shoppingCart = () => {
  let total = 0;
  let html = ``;
  const userIdIndex = model.users.findIndex((user) => {
    return user.userId === model.app.currentUser;
  });
  for (let i = 0; i < model.users[userIdIndex].shoppingCart.length; i++) {
    let currentItem = model.users[userIdIndex].shoppingCart[i];
    model.storeArticles.forEach((e) => {
      if (e.articleId === currentItem.articleId) {
        html += `<div>${e.title} ${
          currentItem.color[0]
        } <input class="shoppingCartInput" value="${currentItem.quantity}">x${
          e.price
        }Kr Pris:${e.price * currentItem.quantity}Kr</div>`;
        total += e.price * currentItem.quantity;
      }
    });
  }
  html += `<div>Total Pris ${total}</div>`;
  return html;
};
