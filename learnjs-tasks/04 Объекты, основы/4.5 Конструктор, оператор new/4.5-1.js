// return может возвращать объект. Соответственно, если обе функции будут ссылаться на этот объект, то их сравнение вернёт булевое значение true:

let user = {name: 'John', age: 32};

function A() {
  return user;
}

function B() {
  return user;
}

let a = new A();
let b = new B();

alert(a == b);
