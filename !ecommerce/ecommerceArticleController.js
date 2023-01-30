"use strict";

const addToShoppingCart = (articleIndex) => {
  if (!model.app.currentUser) {
    return changeCurrentPage("loginView");
  }
  // legg til i handlevogn funksjon
  const userIndex = model.users.findIndex((obj) => {
    return obj.userId === model.app.currentUser;
  });

  /*if (
    model.users[userIndex].shoppingCart.includes(
      model.storeArticles[articleIndex]
    )
  ) {
    return increaseQuantity(userIndex);
  }*/

  // Ikke ferdig ^

  model.users[userIndex].shoppingCart.push(model.storeArticles[articleIndex]);
};

/*function increaseQuantity(index) {
  const shoppingCartItemIndex = model.users[index].shoppingCart.findIndex(
    (obj) => {
      return obj.articleId === model.inputs.currentArticle;
    }
  );

  model.users[index].shoppingCart[shoppingCartItemIndex].quantity += 1;
}*/

// Ikke ferdig ^
