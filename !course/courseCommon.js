"use strict";

function getCourseStoreIdIndex(id) {
  return model.courseStore.findIndex((obj) => obj.courseId === id);
}

function getUserIdIndex() {
  return model.users.findIndex((obj) => obj.userId === model.app.currentUser);
}

function getCourseShoppingCartIdIndex(id) {
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];

  return user.courseShoppingCart.findIndex((obj) => obj.courseId === id);
}
