"use strict";

const aboutMeView = () => {
  let theHTML =
    /*html*/
    `
<section class="aboout_me">
<div class="about_me_image">
</div>
<div class="container">
<h2>Om Meg:</h2>
<p>${aboutMeText()}</p>
</div>

</section>

`;
  return theHTML;
};

const aboutMeText = () => {
  return `
  <p>René Beathe er en kreativ og engasjerende person som har funnet sin lidenskap for å inspirere barn til å lære om realfag på en morsom og underholdende måte. Hennes arbeid som barnegage-forfatter med fokus på realfag har vist seg å være en suksess blant både barn og foreldre.</p>
  <p>René Beathe er en person som brenner for å vise barna at realfag ikke trenger å være kjedelig eller vanskelig. Gjennom hennes kreative tilnærming har hun klart å få barna interessert i realfag, og hun gjør det på en måte som er både spennende og utfordrende. Med sin brede kunnskap om realfag, er René Beathe i stand til å utvikle læringsopplevelser som er tilpasset barnas nivå og interesser.</p>
  <p>René Beathe mener at det å lære realfag på en kreativ måte kan gi barna en mye dypere forståelse for emnet, samtidig som det øker deres interesse og motivasjon for å lære mer. Hun har utviklet en rekke innovative aktiviteter som inkluderer eksperimenter, spill og konkurranser, som har vist seg å være svært populære blant barna.</p>
  <p>En av René Beathe sine største styrker er hennes evne til å skape en trygg og støttende læringsmiljø for barna. Hun er flink til å kommunisere med barna på deres nivå, og gjør det lett for dem å forstå de komplekse konseptene som realfag inneholder. René Beathe har også en naturlig evne til å motivere barna, og hun har en positiv og oppmuntrende tilnærming som inspirerer dem til å jobbe hardt og nå sine mål.</p>
  <p>Takket være René Beathe sin innsats og engasjement, har mange barn fått en ny interesse for realfag, og de ser nå på det som noe morsomt og spennende. René Beathe har vist at det er mulig å lære realfag på en kreativ og underholdende måte, og hennes arbeid har åpnet dørene for mange barn som tidligere har vært skeptiske til realfag.</p>
    `;
};
