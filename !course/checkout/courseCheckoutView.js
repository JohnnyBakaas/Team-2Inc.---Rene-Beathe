"use strict";

function courseCheckoutView() {
  return `
  <nav class="course-nav-layout">
    <div onclick="changeCurrentPage('courseShoppingCartView')">Tilbake til handlevogn</div>
  </nav>

  <section class="course-check-out-layout">
    <div class="course-check-out-content">
      <label for="fname">Fornavn</label>
      <input type="text" oninput="getCheckoutInput(this.value, 'fname')" id="fname" name="fname">
    </div>

    <div class="course-check-out-content">
      <label for="lname">Etternavn</label>
      <input type="text" oninput="getCheckoutInput(this.value, 'lname')" id="lname" name="lname">
    </div>

    <div class="course-check-out-content">
      <label for="address">Adresse</label>
      <input type="text" oninput="getCheckoutInput(this.value, 'address')" id="address" name="address">
    </div>

    <div class="course-check-out-content">
      <label for="email">Email</label>
      <input type="email" oninput="getCheckoutInput(this.value, 'email')" id="email" name="email">
    </div>

    <div class="course-check-out-content">
      <label for="city">By</label>
      <input type="city" oninput="getCheckoutInput(this.value, 'city')" id="city" name="city">
    </div>

    <div class="course-check-out-content">
      <label for="zip">Zip</label>
      <input type="zip" oninput="getCheckoutInput(this.value, 'zip')" id="zip" name="zip">
    </div>

    <div class="course-check-out-content">
      <label for="country">Land</label>
      <input type="country" oninput="getCheckoutInput(this.value, 'country')" id="country" name="country">
    </div>

    <div>
      <button onclick="completePayment()">FULLFØR BETALING</button>
    </div>
  </section>
  `;
}
