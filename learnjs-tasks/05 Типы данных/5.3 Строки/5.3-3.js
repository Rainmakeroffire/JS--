function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.replace(str.substring(maxlength), "");
    }
  
    return str;
  }
  
  console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
  console.log(truncate("Всем привет!", 20))