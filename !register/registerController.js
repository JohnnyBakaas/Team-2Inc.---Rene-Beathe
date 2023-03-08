const registerMe = () => {
  let userInfo = {
    name: `${fname.value}`,
    lastName: `${lname.value}`,
    username: `${uname.value}`,
    userId: findLastUserId(),
    password: `${pword.value}`,
    mail: `${mail.value}`,
    address: `${address.value}`,
    zipcode: `${zipcode.value}`,
    shoppingCart: [],
    storeOrders: [],
    courseShoppingCart: [],
    courseOrders: [],
  };
  if (
    fname.value == "" ||
    lname.value == "" ||
    uname.value == "" ||
    pword.value == ""
  ) {
    model.inputs.registration.fillMandatory = "Fyll Obligatoriske Felt";
    return view();
  }

  model.users.push(userInfo);
  clearRegister();
  model.app.state = "loginView";
  view();
};

const findLastUserId = () => {
  let lastId = 0;
  for (let i = 0; i < model.users.length; i++) {
    if (model.users[i].userId >= lastId) lastId = model.users[i].userId + 1;
  }
  return lastId;
};
const clearRegister = () => {
  return Object.keys(model.inputs.registration).forEach(
    (e) => (model.inputs.registration[e] = "")
  );

  /*return model.inputs.registration.forEach(() =>
        model.inputs.registration.set("");*/
};

const newRegistration = () => {
  let form = document.getElementsByClassName("myForm");
  let isfilled = true;

  Array.from(form[1].elements).forEach((e) => {
    if (e.value === ``) {
      isfilled = false;
    }
  });
  if (!isfilled) {
    return;
  } else {
    let newUser = {
      name: `${form[1].name.value}`,
      lastName: `${form[1].surName.value}`,
      username: `${form[1].username.value}`,
      userId: findLastUserId(),
      password: `${form[1].password.value}`,
      mail: `${form[1].email.value}`,
      address: `${form[1].address.value}`,
      zipcode: `${form[1].zip.value}`,
      shoppingCart: [],
      storeOrders: [],
      courseShoppingCart: [],
      courseOrders: [],
    };

    model.users.push(newUser);
    model.app.currentUser = newUser.userId;
    view();
  }
};
