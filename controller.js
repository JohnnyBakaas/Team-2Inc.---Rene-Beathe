"use strict";

const changeCurrentPage = (destination) => {
  model.app.state = destination;
  view();
};
const temporarySave = (modelInput, input) => {
  return (modelInput = input);
};

const togleNav = () => {
  console.log(document.getElementsByTagName("nav"));
  document.getElementsByTagName("nav")[0].style.display = "block";
};
