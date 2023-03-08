"use strict";
const goToCheckout = () => {
  model.app.state = `storeCheckoutView`;
  view();
};

const pay = () => {
  let modal = document.getElementsByClassName("myModal");
  let box = modal[1].querySelector(":scope > div");
  if (modal[1].style.display === "none") {
    modal[1].style.display = "flex";
    box.style.height = "5vh";
    box.style.width = "25%";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.alignItems = "center";
    modal[0].style.display = "none";
    box.style.animationName = "reduction";
  } else {
    modal[1].style.display = "none";
  }
  // Legg til nytt view her

  changeCurrentPage("takkForHandelView");
};
// window.addEventListener("click") = () => {
//   let modal = document.getElementsByClassName("myModal");
//   if(EventTarget === modal) {
//     modal.style.display = "none";
//   }

const submitCheckout = (e) => {
  let form = document.querySelector(".myForm");
  if (
    form.name.value === "" ||
    form.surName.value === "" ||
    form.email.value === "" ||
    form.address.value === "" ||
    form.zip.value === "" ||
    form.city.value === ""
  ) {
    return;
  }
  e.preventDefault();
  let user = model.users.findIndex(
    (obj) => obj.userId === model.app.currentUser
  );
  let orderNum = 0;
  for (let i = 0; i < model.users[user].storeOrders.length; i++) {
    if (model.users[user].storeOrders[i].orderNum > orderNum) {
      newNum = model.users[user].storeOrders[i].orderNum;
    }
    orderNum++;
  }

  let articleIds = model.users[user].shoppingCart;
  let orderDate = currentDate();
  let totalPrice = total;
  let userInfo = {
    name: form.name.value,
    surName: form.surName.value,
    email: form.email.value,
    address: form.address.value,
    zipCode: form.zip.value,
    country: form.country.value,
    city: form.city.value,
  };
  let fin = {
    orderDate: orderDate,
    orderNum: orderNum,
    articleIds: articleIds,
    totalPrice: totalPrice,
    userinfo: userInfo,
  };
  model.users[user].storeOrders.push(fin);
  model.users[user].shoppingCart = [];
  view();
  modalThingy("thanks");
};

const currentDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}.${month}.${year}`;

  return currentDate;
};
