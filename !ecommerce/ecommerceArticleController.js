"use strict";

const addToShoppingCart = (articleIndex) => {
  if (!model.app.currentUser) {
    return changeCurrentPage("loginView");
  }

  // legg til i handlevogn funksjon
  const userIndex = model.users.findIndex((obj) => {
    return obj.userId === model.app.currentUser;
  });

  if (model.users[userIndex].shoppingCart.length === 0) {
    return model.users[userIndex].shoppingCart.push({
      articleId: model.storeArticles[articleIndex].articleId,
      color: model.inputs.shoppingColor,
      quantity: 1,
    });
  } else {
    for (let i = 0; i < model.users[userIndex].shoppingCart.length; i++) {
      if (model.users[userIndex].shoppingCart[i].articleId === articleIndex) {
        if (!model.storeArticles[articleIndex].colors) {
          model.inputs.shoppingColor = ``;
        }
        if (model.storeArticles[articleIndex].colors) {
          if (
            model.users[userIndex].shoppingCart[i].color[0] ===
            model.inputs.shoppingColor[0]
          ) {
            return model.users[userIndex].shoppingCart[i].quantity++;
          }
        } else return model.users[userIndex].shoppingCart[i].quantity++;
      }
    }
  }
  if (!model.storeArticles[articleIndex].colors) {
    model.inputs.shoppingColor = ``;
  }
  model.users[userIndex].shoppingCart.push({
    articleId: model.storeArticles[articleIndex].articleId,
    color: model.inputs.shoppingColor,
    quantity: 1,
  });
};
function test(index) {
  const shoppingCartItemIndex = model.users[index].shoppingCart.findIndex(
    (obj) => {
      return obj.articleId === model.inputs.currentArticle;
    }
  );
}

const shoppingCartColor = (colorName, colorCSS) => {
  model.inputs.shoppingColor = [colorName, colorCSS];
};
