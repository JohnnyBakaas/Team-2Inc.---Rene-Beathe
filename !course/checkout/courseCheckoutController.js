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
const email1 = "aamundhe@getacademy.no";

if (email1.includes("@") && email1.includes(".no")) console.log("adsf");

const tegn = ["@", "."];
let tegnTeller = 0;

for (let i = 0; i < email1.length; i++) {
  if (tegnTeller == 2) {
    console.log("KAKE");
    break;
  }
  if (email1[i] == tegn[tegnTeller]) {
    tegnTeller++;
  }
}

const checkIfEmail = (email) => {
  if (email.indexOf(".", email.indexOf("@")) !== -1) {
    let tegnEtterPunktum =
      email.length - email.indexOf(".", email.indexOf("@"));
    if (tegnEtterPunktum < 5 || tegnEtterPunktum > 1) {
      return true;
    }
  }
};

console.log(checkIfEmail(email1));
