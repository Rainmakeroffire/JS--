function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
  }
  
  alert(getLastDayOfMonth(2007, 8));
  alert(getLastDayOfMonth(2016, 2));
  alert(getLastDayOfMonth(2023, 11));