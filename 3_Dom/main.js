const inputTime = document.querySelector(".input");
const buttonSend = document.querySelector(".button");
const buttonStop = document.querySelector(".buttonStop");
let work = false;

function timer() {
  if (inputTime.value > 0) {
    let time = inputTime.value - 1;
    inputTime.value = time;
  } else {
    clearInterval(intId);
    work = false;
  }
}

buttonSend.addEventListener("click", () => {
  if (work !== true && Number(inputTime.value)) {
    work = true;
    intId = setInterval(timer, 1000);
  }
});

buttonStop.onclick = () => {
  clearInterval(intId);
  work = false;
};
