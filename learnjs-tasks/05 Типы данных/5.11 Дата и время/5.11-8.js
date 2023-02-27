function formatDate (date) {
    let now = new Date();
    let difference = (now - date) / 1000;
    return difference <= 1 ? "прямо сейчас" : difference <= 30 ? "30 сек. назад" : difference <= 30000 ? "5 мин. назад" : format(new Date(now - difference * 1000));
    
    function format(basedate) {
    let str =
    formatPlusZero(basedate.getDate().toString(), 0) +
    "." +
    formatPlusZero(basedate.getMonth().toString(), 1) +
    "." +
    basedate.getFullYear().toString().slice(2) +
    " " +
    basedate.getHours().toString() +
    ":" +
    basedate.getMinutes().toString();
    return str;
    
    function formatPlusZero(strData, plus) {
    return strData.length < 2 ? "0" + (Number(strData) + plus) : strData;
            }
        }
    };
    
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );