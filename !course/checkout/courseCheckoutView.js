"use strict";

function courseCheckoutView() {
  return `
  <nav class="course-nav-layout">
    <div onclick="changeCurrentPage('courseShoppingCartView')">Tilbake til handlevogn</div>
  </nav>

  <section>
    <label for="fname">Fornavn</label>
    <input type="text" id="fname" name="fname">

    <label for="lname">Etternavn</label>
    <input type="text" id="lname" name="lname">

    <label for="address">Adresse</label>
    <input type="text" id="address" name="address">

    <label for="email">Email</label>
    <input type="email" id="email" name="email">
  </section>
  `;
}
