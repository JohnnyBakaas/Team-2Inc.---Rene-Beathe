"use strict";

function getCourseIdIndex(id) {
  return model.courseStore.findIndex((obj) => obj.courseId === id);
}

function getUserIdIndex() {
  return model.users.findIndex((obj) => obj.userId === model.app.currentUser);
}

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

  const courseIdIndex = getCourseIdIndex(courseId);
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];
  const courseArticle = model.courseStore[courseIdIndex];

  if (user.courseShoppingCart.includes(courseArticle)) {
    return displayMessage();
  }

  user.courseShoppingCart.push(courseArticle);
}
