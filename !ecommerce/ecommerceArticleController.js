"use strict";

const addToShoppingCart = (articleIndex) => {
  if (!model.app.currentUser) {
    return changeCurrentPage("loginView");
  }
  // legg til i handlevogn funksjon
  const userIndex = model.users.findIndex((obj) => {
    return obj.userId === model.app.currentUser;
  });
  model.users[userIndex].shoppingCart.push(model.storeArticles[articleIndex]);
};
