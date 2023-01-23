let fillMandatory = ``;

const registerView = (falseInput) => {
  let theHTML = /**/ `
<h2>Registrer</h2>
<h3>${fillMandatory}</h3>
<form>
<label for="fname">First Name*:</label>
<label for="lname">Last name*:</label>
<label for="uname">User Name*:</label>
<br>
<input type="text" id="fname">
<input type="text" id="lname">
<input type="text" id="uname">
<br>
<label for="mail">Mail:</label>
<br>
<input type="text" id="mail">
<br>
<label for="pword">Password*:
<br>
<input type="text" id="pword">
<br>
<label for="address">Adresse:</label><label for="zipcode">Postkode:</label>
<br>
<input type="text" id="address"><input type="text" id="zipcode">
<br>
<input type="button" id="doesNothing" value="Does Nothing" onclick="registerMe()">

</form>
</section>
`;
  return theHTML;
};

/*${ filledMandatory() ? "" : "<h3>Fill obligatoriske felt</h3>" }*/
