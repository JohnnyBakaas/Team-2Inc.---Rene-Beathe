"use strict";

function displayMessage() {
  document.getElementById("displayMsg").style.display = "flex";
}

function closeMessage() {
  document.getElementById("displayMsg").style.display = "none";
}

function addToCourseShoppingCart(courseId) {
  if (model.app.currentUser === null) {
    return changeCurrentPage("loginView");
  }

  const courseStoreIdIndex = getCourseStoreIdIndex(courseId);
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];
  const courseArticle = model.courseStore[courseStoreIdIndex];

  if (user.courseShoppingCart.includes(courseArticle)) {
    return displayMessage();
  }

  user.courseShoppingCart.push(courseArticle);
}
