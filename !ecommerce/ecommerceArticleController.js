"use strict";

const addToShoppingCart = (articleIndex) => {
  if (!model.app.currentUser) {
    return changeCurrentPage("loginView");
  }
  // legg til i handlevogn funksjon
  const userIndex = model.users.findIndex((obj) => {
    return obj.userId === model.app.currentUser;
  });

  if (
    model.users[userIndex].shoppingCart.includes(
      model.storeArticles[articleIndex]
    )
  ) {
    return test(userIndex);
  }

  model.users[userIndex].shoppingCart.push(model.storeArticles[articleIndex]);
};

function test(index) {
  const shoppingCartItemIndex = model.users[index].shoppingCart.findIndex(
    (obj) => {
      return obj.articleId === model.inputs.currentArticle;
    }
  );
}
