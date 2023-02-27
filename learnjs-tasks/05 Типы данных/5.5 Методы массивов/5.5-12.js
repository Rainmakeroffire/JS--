function unique(arr) {
  let result = [];

  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O