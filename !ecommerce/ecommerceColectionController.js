const removeEcommerceFilter = (category) => {
  model.inputs.shoppingFilter = "";
  view();
};

const selectEcommerceFilter = (category) => {
  model.inputs.shoppingFilter = category;
  view();
};

const openArticle = (id) => {
  model.app.state = "ecommerceArticleView";
  model.inputs.currentArticle = id;

  view();
};

function logOut() {
  model.app.currentUser = null;
  changeCurrentPage("ecommerceCollectionView");
}
