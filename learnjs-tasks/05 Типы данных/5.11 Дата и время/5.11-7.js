function getSecondsToTomorrow() {
    let today = new Date();

    return 86400 - ((today.getHours() * 60 + today.getMinutes()) * 60 + today.getSeconds());
  }

alert(getSecondsToTomorrow());