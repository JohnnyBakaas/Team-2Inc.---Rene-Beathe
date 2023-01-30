const registerView = (falseInput) => {
  let theHTML = /**/ `

<form class="form-line">
<h2>Registrer</h2>
<h3>${model.inputs.registration.fillMandatory}</h3>
<label class="flex-column" for="fname">First Name*:</label>
<input class="flex-column" type="text" id="fname" onchange="model.inputs.registration.firstName = this.value" value=${model.inputs.registration.firstName}>

<label for="lname">Last name*:</label>
<input type="text" id="lname" onchange="model.inputs.registration.surName = this.value" value=${model.inputs.registration.surName}>
<label for="uname">User Name*:</label>


<input type="text" id="uname" onchange="model.inputs.registration.userName = this.value" value=${model.inputs.registration.userName}>

<label for="mail">Mail:</label>

<input type="text" id="mail" onchange="model.inputs.registration.email = this.value" value=${model.inputs.registration.email}>

<label for="pword">Password*:</label>

<input type="text" id="pword" onchange="model.inputs.registration.password = this.value" value=${model.inputs.registration.password}>

<label for="address">Adresse:</label><input type="text" id="address"  onchange="model.inputs.registration.address = this.value" value=${model.inputs.registration.address}>
<label for="zipcode">Postkode:</label>

<input type="text" id="zipcode"  onchange="model.inputs.registration.zipCode = this.value" value=${model.inputs.registration.zipCode}>

<input type="button" id="doesNothing" value="Register" onclick="registerMe()">

</form>
</section>
`;
  return theHTML;
};

/*${ filledMandatory() ? "" : "<h3>Fill obligatoriske felt</h3>" }*/
