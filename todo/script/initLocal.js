export let masToJson = [];
// export function initLocalStorage() {
//   console.log(document.head.querySelector(".name").textContent);
//   if (
//     document.head.querySelector(".name").textContent == "for son" &&
//     JSON.parse(localStorage.getItem("myTodoshka"))
//   ) {
//     const elements = JSON.parse(localStorage.getItem("myTodoshka"));
//     for (let i = 0; i < elements.length; i++) {
//       if (elements[i] !== null) {
//         const li = document.createElement("li");
//         const ul = document.querySelector(".ul");
//         const div = document.createElement("div");
//         const p = document.createElement("p");
//         const buttonReady = document.createElement("button");
//         const buttonDelete = document.createElement("button");
//         const indexLi = i;

//         li.className = "element";
//         buttonReady.className =
//           "buttonReady waves-effect waves-light btn-small green";
//         buttonReady.textContent = "Пометить задачу как выполненную";
//         buttonDelete.className =
//           "buttonDelete waves-effect waves-light btn-small red";
//         buttonDelete.textContent = "Удалить задачу";
//         div.className = "buttons";
//         p.className = "textOfMission";
//         p.textContent = elements[indexLi].text;

//         ul.append(li);
//         li.append(p);
//         li.append(div);
//         div.append(buttonReady);
//         div.append(buttonDelete);

//         console.dir(li);

//         if (elements[indexLi].ready) {
//           li.style.backgroundColor = "lightgreen";
//         }

//         buttonReady.addEventListener("click", (e) => {
//           if (li.style.backgroundColor == "lightgreen") {
//             li.style.backgroundColor = "";
//             work = false;
//             masToJson[indexLi] = { text: p.textContent, ready: work };
//           } else {
//             li.style.backgroundColor = "lightgreen";
//             work = true;
//             masToJson[indexLi] = { text: p.textContent, ready: work };
//           }
//         });
//         buttonDelete.addEventListener("click", (e) => {
//           console.log(indexLi);
//           li.remove();
//           delete masToJson[indexLi];
//         });

//         masToJson[indexLi] = {
//           text: p.textContent,
//           ready: elements[indexLi].ready,
//         };
//       }
//       localStorage.removeItem("myTodoshka");
//     }
//   } else if (
//     document.head.querySelector(".name").textContent == "for mom" &&
//     JSON.parse(localStorage.getItem("momTodoshka"))
//   ) {
//     const elements = JSON.parse(localStorage.getItem("momTodoshka"));
//     for (let i = 0; i < elements.length; i++) {
//       if (elements[i] !== null) {
//         const li = document.createElement("li");
//         const ul = document.querySelector(".ul");
//         const div = document.createElement("div");
//         const p = document.createElement("p");
//         const buttonReady = document.createElement("button");
//         const buttonDelete = document.createElement("button");
//         const indexLi = i;

//         li.className = "element";
//         buttonReady.className =
//           "buttonReady waves-effect waves-light btn-small green";
//         buttonReady.textContent = "Пометить задачу как выполненную";
//         buttonDelete.className =
//           "buttonDelete waves-effect waves-light btn-small red";
//         buttonDelete.textContent = "Удалить задачу";
//         div.className = "buttons";
//         p.className = "textOfMission";
//         p.textContent = elements[indexLi].text;

//         ul.append(li);
//         li.append(p);
//         li.append(div);
//         div.append(buttonReady);
//         div.append(buttonDelete);

//         console.dir(li);

//         if (elements[indexLi].ready) {
//           li.style.backgroundColor = "lightgreen";
//         }

//         buttonReady.addEventListener("click", (e) => {
//           if (li.style.backgroundColor == "lightgreen") {
//             li.style.backgroundColor = "";
//             work = false;
//             masToJson[indexLi] = { text: p.textContent, ready: work };
//           } else {
//             li.style.backgroundColor = "lightgreen";
//             work = true;
//             masToJson[indexLi] = { text: p.textContent, ready: work };
//           }
//         });
//         buttonDelete.addEventListener("click", (e) => {
//           console.log(indexLi);
//           li.remove();
//           delete masToJson[indexLi];
//         });

//         masToJson[indexLi] = {
//           text: p.textContent,
//           ready: elements[indexLi].ready,
//         };
//       }
//       localStorage.removeItem("momTodoshka");
//     }
//   } else if (
//     document.head.querySelector(".name").textContent == "for dad" &&
//     JSON.parse(localStorage.getItem("dadTodoshka"))
//   ) {
//     const elements = JSON.parse(localStorage.getItem("dadTodoshka"));
//     for (let i = 0; i < elements.length; i++) {
//       if (elements[i] !== null) {
//         const li = document.createElement("li");
//         const ul = document.querySelector(".ul");
//         const div = document.createElement("div");
//         const p = document.createElement("p");
//         const buttonReady = document.createElement("button");
//         const buttonDelete = document.createElement("button");
//         const indexLi = i;

//         li.className = "element";
//         buttonReady.className =
//           "buttonReady waves-effect waves-light btn-small green";
//         buttonReady.textContent = "Пометить задачу как выполненную";
//         buttonDelete.className =
//           "buttonDelete waves-effect waves-light btn-small red";
//         buttonDelete.textContent = "Удалить задачу";
//         div.className = "buttons";
//         p.className = "textOfMission";
//         p.textContent = elements[indexLi].text;

//         ul.append(li);
//         li.append(p);
//         li.append(div);
//         div.append(buttonReady);
//         div.append(buttonDelete);

//         console.dir(li);

//         if (elements[indexLi].ready) {
//           li.style.backgroundColor = "lightgreen";
//         }

//         buttonReady.addEventListener("click", (e) => {
//           if (li.style.backgroundColor == "lightgreen") {
//             li.style.backgroundColor = "";
//             work = false;
//             masToJson[indexLi] = { text: p.textContent, ready: work };
//           } else {
//             li.style.backgroundColor = "lightgreen";
//             work = true;
//             masToJson[indexLi] = { text: p.textContent, ready: work };
//           }
//         });
//         buttonDelete.addEventListener("click", (e) => {
//           console.log(indexLi);
//           li.remove();
//           delete masToJson[indexLi];
//         });

//         masToJson[indexLi] = {
//           text: p.textContent,
//           ready: elements[indexLi].ready,
//         };
//       }
//       localStorage.removeItem("dadTodoshka");
//     }
//   }
// }

let work = false;

function initLocalItemList(nameOfList) {
  const elements = JSON.parse(localStorage.getItem(nameOfList));
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== null) {
      const li = document.createElement("li");
      const ul = document.querySelector(".ul");
      const div = document.createElement("div");
      const p = document.createElement("p");
      const buttonReady = document.createElement("button");
      const buttonDelete = document.createElement("button");
      const indexLi = i;

      li.className = "element";
      buttonReady.className =
        "buttonReady waves-effect waves-light btn-small green";
      buttonReady.textContent = "Пометить задачу как выполненную";
      buttonDelete.className =
        "buttonDelete waves-effect waves-light btn-small red";
      buttonDelete.textContent = "Удалить задачу";
      div.className = "buttons";
      p.className = "textOfMission";
      p.textContent = elements[indexLi].text;

      ul.append(li);
      li.append(p);
      li.append(div);
      div.append(buttonReady);
      div.append(buttonDelete);

      console.dir(li);

      if (elements[indexLi].ready) {
        li.style.backgroundColor = "lightgreen";
      }

      buttonReady.addEventListener("click", (e) => {
        if (li.style.backgroundColor == "lightgreen") {
          li.style.backgroundColor = "";
          work = false;
          masToJson[indexLi] = { text: p.textContent, ready: work };
        } else {
          li.style.backgroundColor = "lightgreen";
          work = true;
          masToJson[indexLi] = { text: p.textContent, ready: work };
        }
      });
      buttonDelete.addEventListener("click", (e) => {
        console.log(indexLi);
        li.remove();
        delete masToJson[indexLi];
      });

      masToJson[indexLi] = {
        text: p.textContent,
        ready: elements[indexLi].ready,
      };
    }
    localStorage.removeItem(nameOfList);
  }
}

export function initLocal() {
  if (document.head.querySelector(".name").textContent == "for son") {
    initLocalItemList("myTodoshka");
  } else if (document.head.querySelector(".name").textContent == "for mom") {
    initLocalItemList("momTodoshka");
  } else if (document.head.querySelector(".name").textContent == "for dad") {
    initLocalItemList("dadTodoshka");
  }
}
