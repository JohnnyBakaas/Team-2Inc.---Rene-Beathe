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
  };
  if (
    fname.value == "" ||
    lname.value == "" ||
    uname.value == "" ||
    pword.value == ""
  ) {
    fillMandatory = "Fyll Obligatoriske Felt";
    return view();
  } else {
    return model.users.push(userInfo) && view();
  }
};

const findLastUserId = () => {
  let lastId = 0;
  for (let i = 0; i < model.users.length; i++) {
    if (model.users[i].userId >= lastId) lastId = model.users[i].userId + 1;
  }
  return lastId;
};
