"use strict";
const goToCheckout = () => {
  model.app.state = `storeCheckoutView`;
  view();
};
