"use strict";

function loginView() {
  return `
  <section>

    <h1>Logg inn</h1>

    <form onsubmit="return false">
      <input type="text" placeholder="Navn" oninput="inputsLoginName(this.value)"> <br>
      <input type="password" placeholder="Passord" oninput="inputsLoginPassword(this.value)"> <br>
      <button onclick="login()">Logg inn</button>
    </form>

    <p>Har du ingen bruker?
    <span class="onHoverPlease" onclick="changeCurrentPage('registerView')">Klikk her</span>
    for å registrere bruker.</p>

  </section>
    `;
}
