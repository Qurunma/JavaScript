"use strict";

const div = document.querySelector(".div");
const input = document.querySelector(".country");
const datalist = document.querySelector(".previous");
const countries = [
  "Россия",
  "Румыния",
  "Руанда",
  "Мексика",
  "Монголия",
  "Германия",
];

for (let i = 0; i < countries.length; i++) {
  const elem = document.createElement("option");
  elem.value = countries[i];
  datalist.append(elem);
}

input.addEventListener("input", () => {
  datalist.innerHTML = "";
  const intVal = input.value.toUpperCase();
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].toUpperCase().indexOf(intVal) === 0) {
      const elem = document.createElement("option");
      elem.value = countries[i];
      datalist.append(elem);
    }
  }
});
