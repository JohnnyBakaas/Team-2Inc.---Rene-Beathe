const generateDayStuf = (monthDelta) => {
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
  kalenderData[0][firstDay.getDay() - 1] = 1;

  generatedDay.setDate(0);
  let setDay = generatedDay.getDate();
  for (let i = firstDay.getDay() - 2; i > -1; i--) {
    kalenderData[0][i] = setDay;
    setDay--;
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

console.log(generateDayStuf(0));
