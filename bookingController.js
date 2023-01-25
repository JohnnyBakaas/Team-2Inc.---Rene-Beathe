const contactSubmit = () => {
  model.inputs.bookingData.fullName = bname.value;
  model.inputs.bookingData.email = bmail.value;
  model.inputs.bookingData.address = baddress.value;
  model.inputs.bookingData.zipCode = bzipcode.value;

  return false;
};

const completeBooking = () => {
  let bookinginfo = {
    firstName: `${bfname.value}`,
    email: `${bmail.value}`,
    address: `${baddress.value}`,
    zipCode: `${bzipcode.value}`,
    orderNum: findLastUserId2(model.users),
    day: [],
  };
  console.log(bookinginfo);
};
