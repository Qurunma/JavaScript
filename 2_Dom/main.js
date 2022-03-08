// //Задание 3
// let input = document.getElementById("inp3");
// let buttonChecker = document.getElementById("buttonChecker");

// function getInput() {
//   let enteredText = input.value;
//   if (enteredText !== "") {
//     alert(`Вы ввели ${input.value}`);
//   } else {
//     alert("Вы ничего не ввели");
//   }
// }

// buttonChecker.addEventListener("click", getInput);

// //Задание 4
// function changeInput() {
//   let inp1 = inp4x1.value;
//   let inp2 = inp4x2.value;
//   inp4x1.value = inp2;
//   inp4x2.value = inp1;
// }

// buttonChange.addEventListener("click", changeInput);

// //Задание 5

// function enableToggle() {
//   inp5.toggleAttribute("disabled");
// }

// buttonToggle.addEventListener("click", enableToggle);

// function enableInp() {
//   inp5.disabled = true;
// }
// function disableInp() {
//   inp5.disabled = false;
// }

// inpOff.addEventListener("click", enableInp);
// inpOn.addEventListener("click", disableInp);

// //Задание 6

// function toggleColor() {
//   if (getComputedStyle(num6).backgroundColor == "rgb(128, 128, 128)") {
//     num6.style.backgroundColor = "white";
//     disableBack.textContent = "Сделать квадрат серым";
//   } else if (getComputedStyle(num6).backgroundColor == "rgb(255, 255, 255)") {
//     num6.style.backgroundColor = "gray";
//     disableBack.textContent = "Сделать квадрат белым";
//   }
// }

// disableBack.addEventListener("click", toggleColor);

//Задание 8

// let squares = document.getElementsByClassName("square");

// num8.addEventListener("click", () => {
//   for (let i = 0; i < squares.length; i++) {
//     if (event.target == squares[i]) {
//       for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = "";
//       }
//       event.target.style.backgroundColor = "green";
//     }
//   }
// });

//Задание 9

// let buttons = document.querySelectorAll(".inputer");

// function inputer() {
//   let outValue = output.value;
//   output.value = `${outValue}` + `${event.target.textContent}`;
// }

// console.log(buttons);

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", inputer);
// }

// result.onclick = () => {
//   output.value = eval(output.value);
// };

// clear.onclick = () => {
//   output.value = "";
// };
