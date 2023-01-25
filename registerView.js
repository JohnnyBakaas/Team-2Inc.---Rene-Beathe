const registerView = (falseInput) => {
  let theHTML = /**/ `
<h2>Registrer</h2>
<h3>${model.inputs.registration.fillMandatory}</h3>
<form>
<label for="fname">First Name*:</label>
<label for="lname">Last name*:</label>
<label for="uname">User Name*:</label>
<br>
<input type="text" id="fname" onchange="model.inputs.registration.firstName = this.value" value=${model.inputs.registration.firstName}>
<input type="text" id="lname" onchange="model.inputs.registration.surName = this.value" value=${model.inputs.registration.surName}>
<input type="text" id="uname" onchange="model.inputs.registration.userName = this.value" value=${model.inputs.registration.userName}>
<br>
<label for="mail">Mail:</label>
<br>
<input type="text" id="mail" onchange="model.inputs.registration.email = this.value" value=${model.inputs.registration.email}>
<br>
<label for="pword">Password*:
<br>
<input type="text" id="pword" onchange="model.inputs.registration.password = this.value" value=${model.inputs.registration.password}>
<br>
<label for="address">Adresse:</label><label for="zipcode">Postkode:</label>
<br>
<input type="text" id="address"  onchange="model.inputs.registration.address = this.value" value=${model.inputs.registration.address}><input type="text" id="zipcode"  onchange="model.inputs.registration.zipCode = this.value" value=${model.inputs.registration.zipCode}>
<br>
<input type="button" id="doesNothing" value="Does Nothing" onclick="registerMe()">

</form>
</section>
`;
  return theHTML;
};

/*${ filledMandatory() ? "" : "<h3>Fill obligatoriske felt</h3>" }*/
