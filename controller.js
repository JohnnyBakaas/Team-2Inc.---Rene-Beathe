"use strict";

const changeCurrentPage = (destination) => {
  model.app.state = destination;
  view();
};
const temporarySave = (modelInput, input) => {
  return (modelInput = input);
};
