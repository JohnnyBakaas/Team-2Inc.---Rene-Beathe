const bookingView = () => {
  let html = `
    <div class="booking">
      <div class="booking-info">
        <div class="booking-bilde"></div>
        <div class="booking-text">
        
          <h2>
            Bli med på vårt spennende seminar om kreativ bruk av realfag!
          </h2>
          <p>
            Er du interessert i å lære mer om hvordan du kan bruke realfag på en kreativ måte? Ønsker du å lære hvordan du kan engasjere barn og unge i realfag på en morsom og interaktiv måte? Hvis svaret er ja, da er vårt seminar perfekt for deg!
            <br>
            <br>
            Vårt seminar om kreativ bruk av realfag vil gi deg en dypere forståelse av hvordan du kan bruke realfag i undervisningen, lek og kreativ utfoldelse. Gjennom interaktive diskusjoner, case-studier og praktiske øvelser vil du lære om de nyeste trendene, utfordringene og løsningene på dette spennende feltet.
            <br>
            <br>
            Vårt seminar er utviklet av et team av eksperter på kreativ bruk av realfag og er tilpasset for å møte behovene til deltakerne. Uansett om du er en lærer, en forelder eller en annen type profesjonell som jobber med barn og unge, vil vårt seminar gi deg praktiske verktøy og teknikker som du kan bruke umiddelbart.
            <br>
            <br>
            Påmelding til vårt seminar er enkelt og raskt. Bare fyll ut skjemaet på vår nettside og du vil motta en bekreftelse på e-post. Vårt seminar vil bli avholdt på [sted og dato], så ikke gå glipp av denne fantastiske muligheten til å lære mer om kreativ bruk av realfag!
            <br>
            <br>
            Hvis du har spørsmål eller trenger mer informasjon, er du velkommen til å kontakte oss. Vi ser frem til å se deg på vårt seminar!
          </p>
        </div>
      </div>
      
      
      <div class="booking-contact">
           <div id="calenderDiv">
              ${makeCalender()}
              <div class="calenderButtons">
                 <button onclick="bookingChangeCalenderMonth(0)">Forrige måned</button>
                 <button onclick="bookingChangeCalenderMonth(1)">Neste måned</button>
              </div>
           </div>
           <div class="booking-contactform">
                <h1>Kontakt</h1>
                <table class="booking-contacttable">
                    <tr>
                        <td>Navn</td>
                        <td><input type="text" id="bname"></td>
                    </tr>
                    <tr>
                        <td>E-post</td>
                        <td><input type="text" id="bmail"></td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td><input type="text" id="baddress"></td>
                    </tr>
                    <tr>
                        <td>Postkode</td>
                        <td><input type="text" id="bzipcode"></td>
                    </tr>
                </table>
                <button onclick="contactSubmit(this)">Send</button>
           </div>
    </div>
    `;

  return html;
};

//Modell fra kalenderGenerator
/*

{
  month: 1,
  dates: [
    [
      30, 31, 1, 2,
       3,  4, 5
    ],
    [
       6,  7,  8, 9,
      10, 11, 12
    ],
    [
      13, 14, 15, 16,
      17, 18, 19
    ],
    [
      20, 21, 22, 23,
      24, 25, 26
    ],
    [
      27, 28, 1, 2,
       3,  4, 5
    ],
    [
       6,  7,  8, 9,
      10, 11, 12
    ]
  ]
}

*/

const makeCalender = () => {
  let inputMonthDelta = model.inputs.currentMonthDelta;
  let weekCount = 0;

  let month = generateCalenderDates(inputMonthDelta).month;
  let year = generateCalenderDates(inputMonthDelta).year;

  let theHTML = `
  <table class="calender" cellspacing="0">
    <tr>
      <h2 class="calenderMonth">${findMonthName(inputMonthDelta)} ${year}</h2>
      <h4 class="calenderInfoText">■ Booket</h4>
    </tr>
    <tr>
      <th>Man</th>
	    <th>Tir</th>
	    <th>Ons</th>
	    <th>Tor</th>
	    <th>Fre</th>
	    <th>Lør</th>
	    <th>Søn</th>
    </tr>
  `;

  for (
    let i = 0;
    i < generateCalenderDates(inputMonthDelta).weeks.length;
    i++
  ) {
    weekCount++;
    theHTML += `<tr>`;
    let weekNumber = generateCalenderDates(inputMonthDelta).weeks[i];
    for (
      let j = 0;
      j < generateCalenderDates(inputMonthDelta).weeks[i].length;
      j++
    ) {
      let dayNumber = generateCalenderDates(inputMonthDelta).weeks[i][j];

      if (
        (dayNumber > 20 && weekCount == 1) ||
        (dayNumber < 15 && weekCount == 5) ||
        (dayNumber < 15 && weekCount == 6)
      ) {
        theHTML += `<td class="calenderNotThisMonth">${dayNumber}</td>`;
      } else {
        if (
          isBooked(`${dayNumber}.${selectedMonth(inputMonthDelta) + 1}.${year}`)
        ) {
          theHTML += `<td class="calenderBooked">${dayNumber}</td>`;
        } else {
          theHTML += `<td>${dayNumber}</td>`;
        }
      }
    }
    theHTML += `</tr>`;
  }

  theHTML += `</table>`;

  return theHTML;
};

const isBooked = (checkDate) => {
  let bookedDates = [];

  let out = false;

  for (let i = 0; i < model.bookingOrders.length; i++) {
    for (let j = 0; j < model.bookingOrders[i].days.length; j++) {
      bookedDates.push(model.bookingOrders[i].days[j]);
    }
  }

  if (bookedDates.includes(checkDate)) {
    out = true;
  }
  return out;
};

const generateCalenderDates = (monthDelta) => {
  const generatedDay = new Date();

  const monthSetter = generatedDay.getMonth() + monthDelta;

  generatedDay.setMonth(monthSetter);

  const year = generatedDay.getFullYear();

  const curentMonthLength = new Date();
  curentMonthLength.setMonth(monthSetter + 1);
  curentMonthLength.setDate(0);

  const kalenderData = [[], [], [], [], [], []];

  const firstDay = new Date();
  firstDay.setMonth(monthSetter);
  firstDay.setDate(1);
  if (firstDay.getDay() == 0) {
    // Hvis første er en søndag
    generatedDay.setDate(0);
    let setDay = generatedDay.getDate();
    kalenderData[0][6] = 1;
    kalenderData[0][5] = setDay;
    for (let i = 4; i > -1; i--) {
      kalenderData[0][i] = kalenderData[0][i + 1] - 1;
    }
  } else {
    // Alle andre dager
    kalenderData[0][firstDay.getDay() - 1] = 1;
    generatedDay.setDate(0);
    let setDay = generatedDay.getDate();
    for (let i = firstDay.getDay() - 2; i > -1; i--) {
      kalenderData[0][i] = setDay;
      setDay--;
    }
  }

  let nextNumber = 1;
  for (let i = 0; i < kalenderData.length; i++) {
    while (kalenderData[i].length < 7) {
      if (nextNumber == curentMonthLength.getDate()) nextNumber = 0;
      nextNumber++;
      kalenderData[i].push(nextNumber);
    }
  }

  return {
    month: monthSetter,
    weeks: kalenderData,
    year: year,
  };
};

const generateCalender = () => {
  document.getElementById("calenderDiv").innerHTML = `
      ${makeCalender()}
          <div class="calenderButtons">
              <button onclick="bookingChangeCalenderMonth(0)">Forrige måned</button>
              <button onclick="bookingChangeCalenderMonth(1)">Neste måned</button>
          </div>
  `;
};

const findMonthName = (inputMonthDelta) => {
  let monthsArray = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let getMonth = selectedMonth(inputMonthDelta);

  return monthsArray[getMonth];
};

const selectedMonth = (inputMonthDelta = 0) => {
  let monthIndex = generateCalenderDates(inputMonthDelta).month % 12;

  while (monthIndex < 0) {
    monthIndex = monthIndex + 12;
  }

  return monthIndex;
};

const removeContactForm = (element) => {
  for (
    let i = 0;
    i < element.parentElement.children[1].children[0].children.length;
    i++
  ) {
    element.parentElement.children[1].children[0].children[
      i
    ].children[1].children[0].value = "";
  }

  element.style.backgroundColor = "red";
  element.innerHTML = "Vi tar kontakt snarest";
};
