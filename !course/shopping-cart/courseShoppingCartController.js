"use strict";

function removeCourseFromShoppingCart(courseId) {
  const courseShoppingCartIdIndex = getCourseShoppingCartIdIndex(courseId);
  const userIdIndex = getUserIdIndex();
  const user = model.users[userIdIndex];

  user.courseShoppingCart.splice(courseShoppingCartIdIndex, 1);
  view();
}
