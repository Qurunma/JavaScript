let arrayOpt = [];
for (let index = 0; index < 6; index++) {
  arrayOpt[index] = {
    value: `co${index + 1}`,
    label: `Вариант выбора ${index + 1}`,
  };
}
let valueNeed = 3;
let selectded = document.createElement("select");
let selectReady = initialisatorOpt(arrayOpt, valueNeed);

document.body.append(selectReady);

function initialisatorOpt(arrayOpt, valueNeed = 0) {
  let optArr = [];
  let valueNeeded = "co" + String(valueNeed);
  console.log(valueNeeded);
  for (let index in arrayOpt) {
    optArr[index] = document.createElement("option");
  }
  console.log(optArr);
  for (let index in optArr) {
    optArr[index].textContent = arrayOpt[index].label;
    optArr[index].value = arrayOpt[index].value;
  }
  for (let index in optArr) {
    selectded.append(optArr[index]);
  }
  for (let index in optArr) {
    if (selectded.options[index].value == valueNeeded) {
      selectded.selectedIndex = index;
      console.log(selectded.selectedIndex);
    }
  }
  return selectded;
}
