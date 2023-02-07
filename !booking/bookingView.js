const bookingView = () => {
  let html = `
    <div class="booking">
      <div class="booking-info">
        <div class="booking-bilde"></div>
        <p>
          En kjempe bra tekst om hvorfor du burde booke Rene Beathe til ditt
          seminar, undervisning eller noen annen grunn til å gi meg penger.
          <br /><br />
          Hvis du ønsker å se barna dine igjen er det best for alle at du booker
          Rene til alle samlinger, seminar og undervisningstimer.
          <br /><br />
          Hvis du ønsker at det skal bli noe av barna dine burde du presse
          barnehagen din til å dra på seminarene mine hvis ikke kommer de alle
          til å bli uteliggere som fryser om nettene.
        </p>
      </div>
      <div class="booking-moreinfo">
          <p>For mer informasjon om booking kan du ta kontakt på mail: rene.hansen@larvik.kommune.no eller se på kalenderen under for å se når jeg er ledig.</p>
      </div>
      
      <div class="booking-contact">
      <div id="calendar" class="calendar"> <span> </span> </div>
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
                <button onclick="contactSubmit()">Send</button>
           </div>
           </div>
           ${makeCalender()}
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
  let theHTML = `
  <section class="calender">
  ${makeDayName()}
  ${makeCalenderContent()}
  </section>
  `;

  return theHTML;
};

const makeDayName = () => {
  let theHTML = "";
  const days = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ];
  theHTML += "<div class='dayColection'>";
  days.forEach((e) => {
    theHTML += `<h3> ${e}</h3>`;
  });
  theHTML += "</div>";
  return theHTML;
};

const makeCalenderContent = (offset) => {
  let theHTML = "<div>";
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  theHTML += "<div>";

  for (let i = 1; i < new Date(year, month, 0).getDate() + 1; i++) {
    let date = new Date();
    date.setDate(i - date.getDate());

    theHTML += `<div ${
      i == today.getDate()
        ? 'class ="curentDay"'
        : isBooked(year, month + 1, i)
        ? 'class = "isBooked"'
        : ""
    }>
      ${i}
    </div>`;
    if (date.getDay() % 7 == 5) theHTML += "</div> <div>";

    console.log(date.getDay());
    console.log(date.getDay() % 7);
  }
  theHTML += "</div>";
  theHTML += "</div>";
  return theHTML;
};

const isBooked = (year, month, day) => {
  let out = false;
  let theDate = day + "." + month + "." + year;
  model.bookingOrders.forEach((e) => {
    e.days.forEach((f) => {
      if (f == theDate) out = true;
    });
  });

  return out;
};

const generateCalenderDates = (monthDelta) => {
  const generatedDay = new Date();

  const monthSetter = generatedDay.getMonth() + monthDelta;

  generatedDay.setMonth(monthSetter);
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
    dates: kalenderData,
  };
};
