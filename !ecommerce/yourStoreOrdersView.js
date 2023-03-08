"use strict";

function yourStoreOrdersView() {
  return `
  <section>
    <span style="display: flex;justify-content: space-between;">
      <h1>Dine bestillinger</h1>
      <button onclick="changeCurrentPage('ecommerceCollectionView')">Tilbake</button>
    </span>

    <div class="your-orders">
      ${yourStoreOrders()}
    </div>

  </section>
  `;
}

function yourStoreOrders() {
  const userIdIndex = model.users.findIndex(function (obj) {
    return obj.userId === model.app.currentUser;
  });

  let html = "";
  let quantity = 0;
  for (let i = 0; i < model.users[userIdIndex].storeOrders.length; i++) {
    const storeOrders = model.users[userIdIndex].storeOrders;
    for (let j = 0; j < storeOrders[i].articleIds.length; j++) {
      quantity += storeOrders[i].articleIds[j].quantity;
    }
    html += `
    <span>Dato: ${storeOrders[i].orderDate}</span>

    <span>Ordrenummer: ${storeOrders[i].orderNum}</span>

    <span>Antall Produkter: ${quantity}</span>

    <span>Total pris: ${storeOrders[i].totalPrice}</span>
    `;
  }

  return html;
}
