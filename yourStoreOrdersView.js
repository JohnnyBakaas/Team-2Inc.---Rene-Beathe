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
  for (let i = 0; i < model.users[userIdIndex].storeOrders.length; i++) {
    const storeOrders = model.users[userIdIndex].storeOrders;

    html += `
    <span>Dato: ${storeOrders[i].orderDate}</span>

    <span>Ordrenummer: ${storeOrders[i].orderNum}</span>

    <span>Artikkelnummer: ${storeOrders[i].articleIds.join(", ")}</span>

    <span>Total pris: ${storeOrders[i].totalPrice}</span>
    `;
  }

  return html;
}
