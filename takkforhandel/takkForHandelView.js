const takkForHandelView = () => {
  let htmll = `
    <div class="takkforhandel">
      <div>
        <div></div>
        <h1>Takk for handelen!</h1>
        <p>Kjøpet har blitt registrert</p>
      </div>
    </div>
    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: arial;
      }
      .takkforhandel {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        text-align: center;
        word-break: break-all;
      }
      .takkforhandel div {
        background-color: var(--primaryColor);
        border: 5px solid black;
        color: black;
        padding: 30px;
        display: flex;
        flex-direction: column;
      }
      .takkforhandel div div {
        background-image: url("../img/renebeathe.jpg");
        height: 400px;
        background-size: cover;
        background-position: center;
      }
    </style>`;

  return htmll;
};
