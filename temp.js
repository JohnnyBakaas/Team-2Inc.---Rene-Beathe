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
