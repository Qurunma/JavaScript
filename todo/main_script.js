// "use strict";

// let masToJson = [];

// (function () {
//   let work = false;
//   let index = localStorage.length;

//   createAppTitle();
//   createTodoItemForm();
//   createTodoList();
//   initLocalAStorage();

//   function createAppTitle() {
//     const h1 = document.createElement("h1");
//     h1.textContent = "Список дел";
//     document.querySelector(".container").append(h1);
//   }

//   function createTodoItemForm() {
//     const forma = document.createElement("form");
//     const div = document.createElement("div");
//     const input = document.createElement("input");
//     const label = document.createElement("label");
//     const button = document.createElement("button");

//     document.querySelector(".container").append(forma);
//     document.addEventListener("DOMContentLoaded", () => {
//       forma.append(div);
//       div.append(input);
//       div.append(label);
//       forma.append(button);
//     });

//     forma.className = "form";
//     forma.id = "form";

//     div.className = "inputer input-field col s12";

//     input.className = "input validate";
//     input.id = "input";
//     input.setAttribute("type", "text");

//     label.setAttribute("for", "input");
//     label.textContent = "Введите текст записи";

//     button.className = "button btn waves-effect waves-light";
//     button.id = "button";
//     button.textContent = "Внести запись";

//     button.addEventListener("click", createTodoItem);
//   }

//   function createTodoList() {
//     const ul = document.createElement("ul");
//     document.querySelector(".container").append(ul);
//     ul.className = "ul";
//   }

//   function initLocalAStorage() {
//     for (let i = 0; i < localStorage.length; i++) {
//       const liNotAppended = localStorage.getItem(`Li${i}`);
//       const ul = document.querySelector(".ul");
//       const li = document.createElement("li");

//       li.className = "element";
//       li.innerHTML = liNotAppended;

//       ul.append(li);

//       const buttonDelete = li.querySelector(".buttonDelete");
//       const buttonReady = li.querySelector(".buttonReady");

//       buttonReady.addEventListener("click", (e) => {
//         if (li.style.backgroundColor == "lightgreen") {
//           li.style.backgroundColor = "";
//           work = false;
//         } else {
//           li.style.backgroundColor = "lightgreen";
//           work = true;
//         }
//       });
//       buttonDelete.addEventListener("click", (e) => {
//         li.remove();
//         localStorage.removeItem(`Li${i}`);
//       });
//     }
//   }

//   function createTodoItem(event) {
//     event.preventDefault();
//     let ready = confirm("Вы уверены, что хотите внести данную запись?");
//     if (ready && input.value != "") {
//       const li = document.createElement("li");
//       const ul = document.querySelector(".ul");
//       const input = document.querySelector(".input");
//       const div = document.createElement("div");
//       const p = document.createElement("p");
//       const buttonReady = document.createElement("button");
//       const buttonDelete = document.createElement("button");
//       const indexLi = index;

//       li.className = "element";
//       buttonReady.className =
//         "buttonReady waves-effect waves-light btn-small green";
//       buttonReady.textContent = "Пометить задачу как выполненную";
//       buttonDelete.className =
//         "buttonDelete waves-effect waves-light btn-small red";
//       buttonDelete.textContent = "Удалить задачу";
//       div.className = "buttons";
//       p.className = "textOfMission";
//       p.textContent = input.value;

//       ul.append(li);
//       li.append(p);
//       li.append(div);
//       div.append(buttonReady);
//       div.append(buttonDelete);

//       localStorage.setItem(`Li${index}`, li.innerHTML);

//       buttonReady.addEventListener("click", (e) => {
//         if (li.style.backgroundColor == "lightgreen") {
//           li.style.backgroundColor = "";
//           work = false;
//         } else {
//           li.style.backgroundColor = "lightgreen";
//           work = true;
//         }
//       });
//       buttonDelete.addEventListener("click", (e) => {
//         li.remove();
//         localStorage.removeItem(`Li${indexLi}`);
//       });

//       index++;

//       console.log(li.innerHTML);

//       console.log(li.parentElement.innerHTML);

//       console.log(localStorage.getItem(`Li${index}`));
//     } else if (input.value == "" && ready) {
//       alert("Невозможно создать пустую запись.");
//     } else {
//       alert("Ввод отменен.");
//     }
//   }
// })();

"use strict";

let masToJson = [];

(function () {
  let work = false;
  let index = JSON.parse(localStorage.getItem("todoshka")).length;

  createAppTitle();
  createTodoItemForm();
  createTodoList();
  initLocalAStorage();

  function createAppTitle() {
    const h1 = document.createElement("h1");
    h1.textContent = "Список дел";
    document.querySelector(".container").append(h1);
  }

  function createTodoItemForm() {
    const forma = document.createElement("form");
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");

    document.querySelector(".container").append(forma);
    document.addEventListener("DOMContentLoaded", () => {
      forma.append(div);
      div.append(input);
      div.append(label);
      forma.append(button);
    });

    forma.className = "form";
    forma.id = "form";

    div.className = "inputer input-field col s12";

    input.className = "input validate";
    input.id = "input";
    input.setAttribute("type", "text");

    label.setAttribute("for", "input");
    label.textContent = "Введите текст записи";

    button.className = "button btn waves-effect waves-light";
    button.id = "button";
    button.textContent = "Внести запись";

    button.addEventListener("click", createTodoItem);
  }

  function createTodoList() {
    const ul = document.createElement("ul");
    document.querySelector(".container").append(ul);
    ul.className = "ul";
  }

  function initLocalAStorage() {
    const elements = JSON.parse(localStorage.getItem("todoshka"));
    for (let i = 0; i < elements.length; i++) {
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
        li.remove();
        masToJson.splice(indexLi, 1);
      });

      masToJson[indexLi] = {
        text: p.textContent,
        ready: elements[indexLi].ready,
      };
    }
  }

  function createTodoItem(event) {
    event.preventDefault();
    let ready = confirm("Вы уверены, что хотите внести данную запись?");
    if (ready && input.value != "") {
      const li = document.createElement("li");
      const ul = document.querySelector(".ul");
      const input = document.querySelector(".input");
      const div = document.createElement("div");
      const p = document.createElement("p");
      const buttonReady = document.createElement("button");
      const buttonDelete = document.createElement("button");
      const indexLi = index;

      li.className = "element";
      buttonReady.className =
        "buttonReady waves-effect waves-light btn-small green";
      buttonReady.textContent = "Пометить задачу как выполненную";
      buttonDelete.className =
        "buttonDelete waves-effect waves-light btn-small red";
      buttonDelete.textContent = "Удалить задачу";
      div.className = "buttons";
      p.className = "textOfMission";
      p.textContent = input.value;

      ul.append(li);
      li.append(p);
      li.append(div);
      div.append(buttonReady);
      div.append(buttonDelete);

      buttonReady.addEventListener("click", (e) => {
        if (li.style.backgroundColor == "lightgreen") {
          li.style.backgroundColor = "";
          work = false;
          masToJson[indexLi] = { text: p.textContent, ready: work };
          s;
        } else {
          li.style.backgroundColor = "lightgreen";
          work = true;
          masToJson[indexLi] = { text: p.textContent, ready: work };
        }
      });
      buttonDelete.addEventListener("click", (e) => {
        li.remove();
        masToJson.splice(indexLi, 1);
      });

      masToJson[indexLi] = { text: p.textContent, ready: work };

      console.log(masToJson[index]);

      index++;
    } else if (input.value == "" && ready) {
      alert("Невозможно создать пустую запись.");
    } else {
      alert("Ввод отменен.");
    }
    console.log(masToJson);
  }
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("todoshka");
    localStorage.setItem("todoshka", JSON.stringify(masToJson));
    confirm("DSadwas");
  });
})();
