"use strict";

function yourShoppingCartView() {
  return `
  <section>
    <span style="display: flex;justify-content: space-between;">
      <h1>Din handlevogn</h1>
      <button onclick="changeCurrentPage('ecommerceCollectionView')">Tilbake</button>
    </span>
    
    <table class="yourShoppingCart"><tbody>
<tr><th>Produkt Navn</th><th>Produkt Farge</th><th>Produkt Antall</th><th>Pris</th></tr>
    ${shoppingCart()}

  </section>


<div class="myModal" style="display:none">

<div>
<header><h1>Check Out</h1><p onclick="modalThingy()">x</p></header>
<form class="myForm">
<p class="obligatory" style="display:none">Fyll Obligatoriske Felt</p>
<label for="name">Name<span>*</span></label>
<input type="text" name="name" placeholder="Navn" required/>
<label for="surName">Last Name<span>*</span></label>
<input type="text" name="surName" placeholder="Etternavn" required/>
<label for="email">Email<span>*</span></label>
<input type="email" name="email" placeholder="examples@example.com" required/>
<label for="address">Address<span>*</span></label>
<input type="text" name="address" placeholder="Main St" required/>
<label for="zip">Zipcode<span>*</span></label>
<input type="text" name="zip" placeholder="3870" required/>
${countryDropdown()}
<label for="city">By<span>*</span></label>
<input type="text" name="city" placeholder="By" required/>
<h2>Total:${total}Kr</h2>
<footer><button class="pay" onclick="submitCheckout(event)">Betal</button></footer>
</form>






</div></div>
  

<section class="myModal" style="display:none"><div>Takk for kjøppet<button class="pay" onclick="pay()">Ok</button></div></section>
`;
}

// convert this to a table, looks ugly now when there is a length difference.
const shoppingCart = () => {
  total = 0;
  let html = ``;
  const userIdIndex = model.users.findIndex((user) => {
    return user.userId === model.app.currentUser;
  });
  for (let i = 0; i < model.users[userIdIndex].shoppingCart.length; i++) {
    let currentItem = model.users[userIdIndex].shoppingCart[i];
    model.storeArticles.forEach((e) => {
      if (e.articleId === currentItem.articleId) {
        html += `<tr id="item${i}"><td class="hover" onclick="openArticle(${
          currentItem.articleId
        })">${e.title}</td><td><div class="flexDiv"><p>${
          currentItem.color ? currentItem.color[0] : "Har ingen farge"
        }</p><p class="colorBox" style="background-color:${
          currentItem.color ? currentItem.color[1] : "black"
        };display:${
          currentItem.color ? "block" : "none"
        }"></p></div></td> <td class="inputReduction"><input class="shoppingCartInput" onchange="calculation(${userIdIndex}, ${i}, this.value)" value="${
          currentItem.quantity
        }">x${e.price}Kr</td><td class="lastChild">Pris:${
          e.price * currentItem.quantity
        }Kr<button onclick="removeThat(${userIdIndex},${i})">Fjern</button></td>`;
        total += e.price * currentItem.quantity;
      }
    });
  }
  html += `</tbody></table><div class="totalAndCheck"><p id="total">Total Pris:${total}Kr<p><button onclick="modalThingy()">Check Ut</button></div>`;
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

// function yourShoppingCart() {
//   const userIdIndex = model.users.findIndex(function (obj) {
//     return obj.userId === model.app.currentUser;
//   });

//   let html = "";
//   for (let i = 0; i < model.users[userIdIndex].shoppingCart.length; i++) {
//     const shoppingCart = model.users[userIdIndex].shoppingCart;

//     html += `
//     <div class="your-shoppingcart">
//       <span>${shoppingCart[i].title}</span>
//     </div>
//     `;
//   }
const showTotal = () => {};
