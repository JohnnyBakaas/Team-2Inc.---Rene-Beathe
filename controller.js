"use strict";

const changeCurrentPage = (destination) => {
  model.app.state = destination;
  view();
};
const temporarySave = (modelInput, input) => {
  return (modelInput = input);
};

const togleNav = () => {
  if (document.getElementsByClassName("mobileHeader")[0].style.display == "")
    return (document.getElementsByClassName("mobileHeader")[0].style.display =
      "flex");
  if (
    document.getElementsByClassName("mobileHeader")[0].style.display != "none"
  )
    return (document.getElementsByClassName("mobileHeader")[0].style.display =
      "none");
  document.getElementsByClassName("mobileHeader")[0].style.display = "flex";
};
