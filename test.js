"use strict";

const model = {
  name: "kake",
  test: [
    {
      header: "Kake inc.",
      makeHeader: function () {
        return `<header> ${this.header} </header>`;
      },
    },
  ],
};

console.log(model.test[0].makeHeader());

model.products.map((p) => {
  kake.innerHTML += `
     <div>
         <div>Tittel: ${p.tittel}</div>
         <div>Pris: ${p.pris}</div>
         <div>Description: ${p.description}</div>
    </div>
`;
});
