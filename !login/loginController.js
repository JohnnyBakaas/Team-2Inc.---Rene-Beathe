"use strict";

function inputsLoginName(inputValue) {
  model.inputs.login.name = inputValue;
}

function inputsLoginPassword(inputValue) {
  model.inputs.login.password = inputValue;
}

function login() {
  for (let i = 0; i < model.users.length; i++) {
    if (
      model.inputs.login.name === model.users[i].name &&
      model.inputs.login.password === model.users[i].password
    ) {
      model.app.currentUser = model.users[i].userId;
      // Clearing inputs after logging in
      model.inputs.login = {
        name: "",
        password: "",
      };
      model.app.state = "courseView";
      return view();
    }

    console.log("Brukernavn/Passord er feil.");
  }
}
