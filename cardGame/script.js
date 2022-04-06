"use strict";

let imgArr = [];
const iconsArr = [
  { url: "backlazhan.png", uses: 0, opened: false },
  { url: "corn.png", uses: 0, opened: false },
  { url: "kapusta.png", uses: 0, opened: false },
  { url: "mushroom.png", uses: 0, opened: false },
  { url: "pumpkin.png", uses: 0, opened: false },
  { url: "tomato.png", uses: 0, opened: false },
];

let openedIndexes = [];

for (let i = 0; i < 12; i++) {
  const div = document.createElement("div");
  imgArr[i] = document.createElement("img");
  let icon = Math.floor(Math.random() * 6);
  div.classList.add("card");
  if (iconsArr[icon].uses != 2) {
    imgArr[i].setAttribute("src", `Icons/${iconsArr[icon].url}`);
    iconsArr[icon].uses++;
    imgArr[i].style.visibility = "hidden";
    div.append(imgArr[i]);
    document.querySelector(".container").append(div);

    div.addEventListener("click", () => {
      switch (imgArr[i].style.visibility) {
        case "hidden":
          imgArr[i].style.visibility = "";
          openedIndexes.push(i);
          break;
        // case "":
        //   imgArr[i].style.visibility = "hidden";
        //   break;
      }
      console.log(imgArr[openedIndexes[0]], imgArr[openedIndexes[1]]);
      if (
        openedIndexes[1] &&
        imgArr[openedIndexes[0]].src !== imgArr[openedIndexes[1]].src
      ) {
        document.querySelector(".container").style.pointerEvents = "none";
        iconsArr[icon].opened = false;
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          imgArr[openedIndexes[0]].style.visibility = "hidden";
          imgArr[openedIndexes[1]].style.visibility = "hidden";
          openedIndexes = [];
          document.querySelector(".container").style.pointerEvents = "auto";
        }, 1000);
      } else if (
        openedIndexes[1] &&
        imgArr[openedIndexes[0]].src == imgArr[openedIndexes[1]].src
      ) {
        document.querySelector(".container").style.pointerEvents = "none";
        openedIndexes = [];
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          document.querySelector(".container").style.pointerEvents = "auto";
        }, 100);
      }

      let allRight = true;
      for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].style.visibility === "hidden") {
          allRight = false;
          break;
        }
      }
      if (allRight) {
        setTimeout(() => {
          alert("Вы победили!");
        }, 101);
      }
    });
  } else {
    i -= 1;
  }
}
