let arrayOpt = [];
for (let index = 0; index < 6; index++) {
  arrayOpt[index] = {
    value: `co${index + 1}`,
    label: `Вариант выбора ${index + 1}`,
  };
}
arrayOpt[6] = 4;
arrayOpt[7] = "XDD";
arrayOpt[8] = { xxxd: 3 };
console.log(typeof arrayOpt[2]);
let filteredArr = filter(arrayOpt);
let valueNeed = 3;
let selectded = document.createElement("select");
let selectReady = initialisatorOpt(filteredArr, valueNeed);

document.body.append(selectReady);

function initialisatorOpt(arrayOpt, valueNeed = 0) {
  let optArr = [];
  for (let index in arrayOpt) {
    optArr[index] = document.createElement("option");
  }
  for (let index in optArr) {
    optArr[index].textContent = arrayOpt[index].label;
    optArr[index].value = arrayOpt[index].value;
  }
  for (let index in optArr) {
    selectded.append(optArr[index]);
  }
  selectded.selectedIndex = valueNeed;
  return selectded;
}
function filter(arrayOpt) {
  let filteredArr = [];
  for (let index in arrayOpt) {
    if (typeof arrayOpt[index] === "object") {
      if ("value" in arrayOpt[index]) {
        filteredArr[index] = {
          value: `${arrayOpt[index].value}`,
          label: `${arrayOpt[index].label}`,
        };
      } else {
      }
    } else if (typeof arrayOpt[index] !== "object") {
      filteredArr[index] = {
        value: `${arrayOpt[index]}`,
        label: `${arrayOpt[index]}`,
      };
    }
  }
  return filteredArr;
}
