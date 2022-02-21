let arrayOpt = [];
for (let index = 0; index < 6; index++) {
  arrayOpt[index] = {
    value: `co${index + 1}`,
    label: `Вариант выбора ${index + 1}`,
  };
}
let selected = document.createElement("select");
let selectReady = initialisatorOpt(arrayOpt);

document.body.append(selectReady);

function initialisatorOpt(arrayOpt) {
  let optArr = [];
  for (let index in arrayOpt) {
    optArr[index] = document.createElement("option");
  }
  console.log(optArr);
  for (let index in optArr) {
    optArr[index].textContent = arrayOpt[index].label;
    optArr[index].value = arrayOpt[index].value;
  }
  for (let index in optArr) {
    selected.append(optArr[index]);
  }
  // seleeect.append
  return selected;
}
