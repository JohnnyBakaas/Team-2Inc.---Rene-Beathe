"use strict";

function getCheckoutInput(value, input) {
  switch (input) {
    case "fname":
      model.inputs.course_checkout.fname = value;
      break;
    case "lname":
      model.inputs.course_checkout.lname = value;
      break;
    case "address":
      model.inputs.course_checkout.address = value;
      break;
    case "email":
      model.inputs.course_checkout.email = value;
      break;
    case "city":
      model.inputs.course_checkout.city = value;
      break;
    case "zip":
      model.inputs.course_checkout.zip = value;
      break;
    case "country":
      model.inputs.course_checkout.country = value;
      break;
  }
}

function completePayment() {
  const input = model.inputs.course_checkout;
  for (const value in input) {
    // Gi en error dersom ikke alle inputs er fylt ut.
    if (input[value] === "") {
      return console.log("FEIL: Alle felt må være fylt ut.");
    }
  }
  console.log("...");
  setTimeout(() => console.log("Takk for handelen."), 3000);
}

// Legge til funksjoner som sjekker f.eks at "@" er i emailen osv...
