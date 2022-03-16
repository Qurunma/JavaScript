// const inputMinutes = document.querySelector(".inputMinutes");
// const inputSeconds = document.querySelector(".inputSeconds");
// const buttonSend = document.querySelector(".button");
// const buttonStop = document.querySelector(".buttonStop");
// let work = false;

// function timer() {
//   if (inputMinutes.value > 0) {
//     if (inputSeconds.value > 0) {
//       let seconds = inputSeconds.value - 1;
//       inputSeconds.value = seconds;
//     } else {
//       inputMinutes.value = inputMinutes.value - 1;
//       inputSeconds.value = 59;
//     }
//   } else if (inputSeconds.value >= 0 && inputMinutes.value == 0) {
//     let seconds = inputSeconds.value - 1;
//     inputSeconds.value = seconds;
//   } else {
//     clearInterval(intId);
//     work = false;
//   }
// }

// buttonSend.addEventListener("click", () => {
//   if (
//     work !== true &&
//     Number(inputMinutes.value) &&
//     (Number(inputSeconds.value) ||
//       inputSeconds.value == "" ||
//       Number(inputSeconds.value) != Number)
//   ) {
//     work = true;
//     intId = setInterval(timer, 1000);
//   } else {
//     alert("Incorrect input or program work now");
//   }
// });

// buttonStop.onclick = () => {
//   clearInterval(intId);
//   work = false;
// };

const h2 = document.querySelector(".h");
const inputer = document.querySelector(".inputer");
let id;

function addText() {
  h2.textContent = inputer.value;
}

inputer.addEventListener("input", () => {
  clearTimeout(id);
  id = setTimeout(addText, 300);
});
