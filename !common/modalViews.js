const shoppingCartModal = () => {
  let html = `
<div class="myModal" style="display:none">

<div>
<header><h1>Check Out</h1><p onclick="modalThingy()">x</p></header>
<form class="myForm">
<p class="obligatory" style="display:none">Fyll Obligatoriske Felt</p>
<label for="name">Name<span>*</span></label>
<input type="text" name="name" placeholder="Navn" required/>
<label for="surName">Last Name<span>*</span></label>
<input type="text" name="surName" placeholder="Etternavn" required/>
<label for="email">Email<span>*</span></label>
<input type="email" name="email" placeholder="examples@example.com" required/>
<label for="address">Address<span>*</span></label>
<input type="text" name="address" placeholder="Main St" required/>
<label for="zip">Zipcode<span>*</span></label>
<input type="text" name="zip" placeholder="3870" required/>
${countryDropdown()}
<label for="city">By<span>*</span></label>
<input type="text" name="city" placeholder="By" required/>
<h2>Total:${total}Kr</h2>
<footer><button class="pay" onclick="submitCheckout(event)">Betal</button></footer>
</form>







</div></div>
  

<section class="myModal" style="display:none"><div>Takk for kjøpet<button class="pay" onclick="pay()">Ok</button></div></section>
`;

  return html;
};

const loginModal = () => {
  let html = `

<section class="myModal" style="display:none;">
<div>
    <header><h1>Logg inn</h1><p onclick="modalThingy()">x</p></header>

    <form class="myForm" onsubmit="return false">
      <label for="name">Name</label>
    <input name="name" type="text" placeholder="Navn" oninput="inputsLoginName(this.value)"> <br>
      <label for="password">Password</label>
    <input name="password" type="password" placeholder="Passord" oninput="inputsLoginPassword(this.value)"> <br>
      
    </form>
    <button class="pay" onclick="login()">Logg inn</button>
    <p>Har du ingen bruker?
    <span class="onHoverPlease" onclick="modalThingy('register')">Klikk her</span>
    for å registrere bruker.</p>
    
    <footer></footer></div>

  </section>



`;
  return html;
};
const registerModal = () => {
  let html = `<section class="myModal" style="display:none;">
<div>
    <header><h1>Registrer</h1><p onclick="modalThingy('register')">x</p></header>

    <form class="myForm">
      <label for="name">Navn</label>
    <input name="name" type="text" placeholder="Navn" required/>
    <label for="surName">Etternavn</label>
    <input name="surName" type="text" placeholder="Etternavn" required/>
    <label for="username">Brukernavn</label>
    <input name="username" type="text" placeholder="Brukernavn" required/>
    <label for="email">Email</label>
    <input name="email" type="mail" placeholder="Email" required/>
    <label for="password">Passord</label>
    <input name="password" type="password" placeholder="Passord" required>
    <label for="address">Address</label>
    <input name="address" type="text" placeholder="Address" required/>
    <label for="zip">Zip Code</label>
    <input name="zip" type="text" placeholder="3870" required/>
      
    </form>
    <button class="pay" onclick="newRegistration()">Registrer</button>
    
    <footer></footer></div>

  </section>
 <section style="display:none"><div>Registrert Successfully</div></section> 

  `;

  return html;
};
const thanksForPurchase = (none) => {
  let html = ``;
  if (none === true) {
    html = `
    <section class="myModal" style="display:none">
<div class="thanksForPurchase">
      
        <p></p>
        <h1>Takk for handelen!</h1>
        <p>Kjøpet har blitt registrert</p>
        <button class="pay" onclick="modalThingy()">Ok</button>
        
    </div>
    </section>
`;
  } else {
    html = `
<section class="myModal" style="display:none">
<div class="thanksForPurchase">
      
        <p></p>
        <h1>Takk for handelen!</h1>
        <p>Kjøpet har blitt registrert</p>
        <button class="pay" onclick="modalThingy('thanks')">Ok</button>
        
    </div>
    </section>
`;
  }
  return html;
};

const modalThingy = (p) => {
  let modal = document.getElementsByClassName("myModal");
  if (p === "thanks") {
    if (modal[2].style.display === "none") {
      modal[2].style.display = "flex";
    } else modal[2].style.display = "none";
  } else if (p === "register") {
    if (modal[1].style.display === "none") {
      modal[1].style.display = "flex";
      modal[0].style.display = "none";
    } else modal[1].style.display = "none";
  } else if (modal[0].style.display === "none") {
    modal[0].style.display = "flex";
  } else {
    modal[0].style.display = "none";
  }
};

window.onclick = (event) => {
  let modal = document.getElementsByClassName("myModal");
  if (event.target === modal[0]) {
    modal[0].style.display = "none";
  } else if (event.target === modal[1]) {
    modal[1].style.display = "none";
  } else if (event.target === modal[2]) {
    modal[2].style.display = "none";
  }
};
