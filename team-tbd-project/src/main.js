function getUserFreeHours(U, US, amountH) {
  freeHoursArr = [];
  if (US.length == 0) {
    freeHoursArr.push({
      title: "Free",
      startDate: U.availableStartHour,
      endDate: U.availableEndHour,
      hours: Math.abs(U.availableStartHour - U.availableEndHour) / 36e5, //amount of free hours.
    });
  } else {
    var hours = Math.abs(U.availableStartHour - US[0].startDate) / 36e5;
    if (hours >= amountH) {
      freeHoursArr.push({
        title: "Free",
        startDate: U.availableStartHour,
        endDate: US[0].startDate,
        hours: hours, //calculate the amount of free hours.
      });
    }

    for (let i = 0; i < US.length() - 2; i++) {
      hours = Math.abs(US[i].endDate - US[i + 1].startDate) / 36e5;
      if (hours >= amountH) {
        freeHoursArr.push({
          title: "Free",
          startDate: US[i].endDate,
          endDate: US[i + 1].startDate,
          hours: hours, //calculate the amount of free hours.
        });
      }
    }

    hours = Math.abs(US[US.length() - 1].endDate - U.availableEndHour) / 36e5;
    if (hours >= amountH) {
      freeHoursArr.push({
        title: "Free",
        startDate: US[US.length() - 1].endDate,
        endDate: U.availableEndHour,
        hours: hours, //calculate the amount of free hours.
      });
    }
  }
}
