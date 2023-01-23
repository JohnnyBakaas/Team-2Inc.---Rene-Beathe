"use strict";

const changeCurrentPage = (destination) => {
  model.app.state = destination;
  view();
};
