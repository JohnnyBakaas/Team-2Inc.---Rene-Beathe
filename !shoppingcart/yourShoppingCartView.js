"use strict";

function yourShoppingCartView() {
  return `
  <section class="yourShoppingCart">
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
// convert this to a table, looks ugly now when there is a length difference.
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
        html += `<div id="item${i}"><span>${e.title}</span> <span>Farge:${
          currentItem.color[0]
        }<p class="colorBox" style="background-color:${
          currentItem.color[1]
        }"></p></span> <input class="shoppingCartInput" onchange="calculation(${userIdIndex}, ${i}, this.value)" value="${
          currentItem.quantity
        }">x${e.price}</span>Kr<span>Pris:${
          e.price * currentItem.quantity
        }Kr<button onclick="removeThat(${userIdIndex},${i})">Fjern</button></span></div>`;
        total += e.price * currentItem.quantity;
      }
    });
  }
  html += `<div>Total Pris:${total}Kr<div><button>Check Ut</button></div>`;
  return html;
};
function calculation(userIdIndex, i, value) {
  model.users[userIdIndex].shoppingCart[i].quantity = value;
  view();
}

const removeThat = (userIdIndex, i) => {
  model.users[userIdIndex].shoppingCart.splice(i, 1);
  view();
};
