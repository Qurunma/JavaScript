"use strict";

let index = 0;
(function () {
  let localKey;
  if (document.head.querySelector(".name").textContent == "for son") {
    localKey = "myTodoshka";
  } else if (document.head.querySelector(".name").textContent == "for mom") {
    localKey = "momTodoshka";
  } else {
    localKey = "dadTodoshka";
  }

  const masToJson = JSON.parse(localStorage.getItem(localKey)) || [];
  masToJson;
  localKey;
  document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector(".container");
    const deleteAll = document.createElement("button");

    div.append(createAppTitle());
    div.append(createTodoItemForm());
    div.append(createTodoList());

    deleteAll.textContent = "Удалить все записи";
    deleteAll.className = "deleteAll btn waves-effect waves-light red";
    deleteAll.style.display = "none";
    deleteAll.addEventListener("click", () => {
      const ul = document.querySelector(".ul");
      masToJson.splice(0);
      ul.innerHTML = "";
      deleteAll.style.display = "none";
    });
    div.append(deleteAll);

    if (masToJson != null) {
      for (let index = 0; index < masToJson.length; index++) {
        createTodoItem(masToJson[index]);
      }
    }
  });

  function createAppTitle() {
    const h1 = document.createElement("h1");
    h1.textContent = "Список дел";
    return h1;
  }

  function createTodoItemForm() {
    const forma = document.createElement("form");
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");

    forma.append(div);
    div.append(input);
    div.append(label);
    forma.append(button);

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
    button.setAttribute("disabled", true);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      createTodoItem();
    });

    input.addEventListener("input", () => {
      if (input.value === "") {
        button.setAttribute("disabled", true);
      } else {
        button.removeAttribute("disabled");
      }
    });

    return forma;
  }

  function createTodoList() {
    const ul = document.createElement("ul");
    ul.className = "ul";
    return ul;
  }

  function createTodoItem(item) {
    if (input.value != "" || (item != null && item.text)) {
      const li = document.createElement("li");
      const ul = document.querySelector(".ul");
      const input = document.querySelector(".input");
      const div = document.createElement("div");
      const p = document.createElement("p");
      const buttonReady = document.createElement("button");
      const buttonDelete = document.createElement("button");
      const indexLi = index;
      const deleteAll = document.querySelector(".deleteAll");

      li.className = "element";
      buttonReady.className =
        "buttonReady waves-effect waves-light btn-small green";
      buttonReady.textContent = "Пометить задачу как выполненную";
      buttonDelete.className =
        "buttonDelete waves-effect waves-light btn-small red";
      buttonDelete.textContent = "Удалить задачу";
      div.className = "buttons";
      p.className = "textOfMission";
      p.textContent = input.value || item.text;
      input.value = "";
      document.getElementById("button").setAttribute("disabled", "true");
      deleteAll.style.display = "block";

      if (item && item.ready) {
        li.style.backgroundColor = "lightgreen";
        masToJson[indexLi] = { text: p.textContent, ready: true };
      }

      ul.prepend(li);
      li.append(p);
      li.append(div);
      div.append(buttonReady);
      div.append(buttonDelete);

      buttonReady.addEventListener("click", (e) => {
        if (li.style.backgroundColor == "lightgreen") {
          li.style.backgroundColor = "";
          item.ready;
          masToJson[indexLi] = { text: p.textContent, ready: false };
        } else if (li.style.backgroundColor == "") {
          li.style.backgroundColor = "lightgreen";
          masToJson[indexLi] = { text: p.textContent, ready: true };
        }
      });
      buttonDelete.addEventListener("click", (e) => {
        indexLi;
        li.remove();
        delete masToJson[indexLi];
        if (ul.innerHTML == "") {
          deleteAll.style.display = "none";
        }
      });

      document.querySelector(".deleteAll");

      masToJson[indexLi] = { text: p.textContent, ready: false };

      masToJson[index];

      index++;
    }
  }

  window.addEventListener("beforeunload", () => {
    if (document.head.querySelector(".name").textContent == "for son") {
      localStorage.setItem("myTodoshka", JSON.stringify(masToJson));
    } else if (document.head.querySelector(".name").textContent == "for mom") {
      localStorage.setItem("momTodoshka", JSON.stringify(masToJson));
    } else if (document.head.querySelector(".name").textContent == "for dad") {
      localStorage.setItem("dadTodoshka", JSON.stringify(masToJson));
    }
  });
})();
