"use strict";

function loginView() {
  return `
  <section>

    <h1>Login</h1>

    <form onsubmit="return false">
      <input type="text" placeholder="Bruker" oninput="loginName(this.value)">
      <input type="password" placeholder="Passord" oninput="loginPassword(this.value)">
      <button onclick="login()">Log inn</button>
    </form>

  </section>
    `;
}
