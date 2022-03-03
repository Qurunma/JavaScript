//Задание 3
let input = document.getElementById("inp3");
let buttonChecker = document.getElementById("buttonChecker");

function getInput() {
  let enteredText = input.value;
  if (enteredText !== "") {
    alert(`Вы ввели ${input.value}`);
  } else {
    alert("Вы ничего не ввели");
  }
}

buttonChecker.addEventListener("click", getInput);

//Задание 4
function changeInput() {
  let inp1 = inp4x1.value;
  let inp2 = inp4x2.value;
  inp4x1.value = inp2;
  inp4x2.value = inp1;
}

buttonChange.addEventListener("click", changeInput);

//Задание 5

function enableToggle() {
  inp5.toggleAttribute("disabled");
}

buttonToggle.addEventListener("click", enableToggle);

function enableInp() {
  inp5.disabled = true;
}
function disableInp() {
  inp5.disabled = false;
}

inpOff.addEventListener("click", enableInp);
inpOn.addEventListener("click", disableInp);

//Задание 6

function toggleColor() {
  if (getComputedStyle(num6).backgroundColor == "rgb(128, 128, 128)") {
    num6.style.backgroundColor = "white";
    disableBack.textContent = "Сделать квадрат серым";
  } else if (getComputedStyle(num6).backgroundColor == "rgb(255, 255, 255)") {
    num6.style.backgroundColor = "gray";
    disableBack.textContent = "Сделать квадрат белым";
  }
}

disableBack.addEventListener("click", toggleColor);

// //Задание 8

// let greenSquare;

// function chooseSquare() {
//   if (greenSquare == undefined && event.target.id == "square1") {
//     square1.style.backgroundColor = "green";
//     greenSquare = event.target.id;
//   } else if (greenSquare == undefined && event.target.id == "square2") {
//     square2.style.backgroundColor = "green";
//     greenSquare = event.target.id;
//   } else if (greenSquare == undefined && event.target.id == "square3") {
//     square3.createAttribute.style.backgroundColor = "green";
//     greenSquare = event.target.id;
//   } else if (greenSquare == undefined && event.target.id == "square4") {
//     square4.style.backgroundColor = "green";
//     greenSquare = event.target.id;
//   } else if (greenSquare != undefined && event.target.id == "square1") {
//     square4.style.backgroundColor = "green";
//     greenSquare.style.backgroundColor = "red";
//     greenSquare = event.target.id;
//   } else if (greenSquare != undefined && event.target.id == "square2") {
//     square4.style.backgroundColor = "green";
//     greenSquare.style.backgroundColor = "red";
//     greenSquare = event.target.id;
//   } else if (greenSquare != undefined && event.target.id == "square3") {
//     square4.style.backgroundColor = "green";
//     greenSquare.style.backgroundColor = "red";
//     greenSquare = event.target.id;
//   } else if (greenSquare != undefined && event.target.id == "square4") {
//     square4.style.backgroundColor = "green";
//     greenSquare.style.backgroundColor = "red";
//     greenSquare = event.target.id;
//   }
// }

// square1.addEventListener("click", chooseSquare);
// square2.addEventListener("click", chooseSquare);
// square3.addEventListener("click", chooseSquare);
// square4.addEventListener("click", chooseSquare);
