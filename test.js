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

console.log(generateCalenderDates(102));
