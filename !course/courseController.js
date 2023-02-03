"use strict";

function addToCourseShoppingCart(courseId) {
  if (model.app.currentUser === null) {
    return changeCurrentPage("loginView");
  }

  const courseIdIndex = model.courseStore.findIndex((obj) => {
    return obj.courseId === courseId;
  });
  const userIdIndex = model.users.findIndex((obj) => {
    return obj.userId === model.app.currentUser;
  });

  if (
    model.users[userIdIndex].courseShoppingCart.includes(
      model.courseStore[courseIdIndex]
    )
  ) {
    return console.log("The course is already added to your cart.");
  }

  model.users[userIdIndex].courseShoppingCart.push(
    model.courseStore[courseIdIndex]
  );
}
