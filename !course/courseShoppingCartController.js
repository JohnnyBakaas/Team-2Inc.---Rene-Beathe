"use strict";

function removeCourseFromShoppingCart(courseId) {
  const userIdIndex = model.users.findIndex((obj) => {
    return obj.userId === model.app.currentUser;
  });

  const user = model.users[userIdIndex];

  const courseIdIndex = user.courseShoppingCart.findIndex((obj) => {
    return obj.courseId === courseId;
  });

  user.courseShoppingCart.splice(courseIdIndex, 1);
  view();
}
