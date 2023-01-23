"use strict";

function loginName(name) {
  model.inputs.loginData.name = name;
}

function loginPassword(password) {
  model.inputs.loginData.password = password;
}

function login() {
  for (let i = 0; i < model.users.length; i++) {
    if (
      model.inputs.loginData.name === model.users[i].name &&
      model.inputs.loginData.password === model.users[i].password
    ) {
      return console.log("Logged in!");
    }

    console.log("Wrong username/password");
  }
}
