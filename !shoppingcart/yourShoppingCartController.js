"use strict";
const goToCheckout = () => {
  model.app.state = `storeCheckoutView`;
  view();
};
const modalThingy = () => {
  let modal = document.getElementsByClassName("myModal");

  if (modal[0].style.display === "none") {
    modal[0].style.display = "flex";
  } else {
    modal[0].style.display = "none";
  }
};
// window.addEventListener("click") = () => {
//   let modal = document.getElementsByClassName("myModal");
//   if(EventTarget === modal) {
//     modal.style.display = "none";
//   }
window.onclick = (event) => {
  let modal = document.getElementsByClassName("myModal");
  if (event.target === modal[0]) {
    modal[0].style.display = "none";
  }
};
