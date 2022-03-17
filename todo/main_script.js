(function () {
  let work = false;
  createAppTitle();
  function createAppTitle() {
    const h1 = document.createElement("h1");
    h1.textContent = "Список дел";
    document.querySelector(".container").append(h1);
    createTodoItemForm();
    createTodoList();
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

      li.className = "element";
      buttonReady.className = "button waves-effect waves-light btn-small green";
      buttonReady.textContent = "Пометить задачу как выполненную";
      buttonDelete.className = "button waves-effect waves-light btn-small red";
      buttonDelete.textContent = "Удалить задачу";
      div.className = "buttons";
      p.className = "textOfMission";

      ul.append(li);
      li.append(p);
      li.append(div);
      div.append(buttonReady);
      div.append(buttonDelete);

      buttonReady.addEventListener("click", (e) => {
        makeReady(e);
      });
      buttonDelete.addEventListener("click", (e) => {
        deleter(e);
      });

      p.textContent = input.value;
    } else if (input.value == "" && ready) {
      alert("Невозможно создать пустую запись.");
    } else {
      alert("Ввод отменен.");
    }
  }

  function deleter(e) {
    e.target.parentElement.parentElement.remove();
  }

  function makeReady(e) {
    console.log(e.target.parentElement.parentElement);
    if (
      e.target.parentElement.parentElement.style.backgroundColor == "lightgreen"
    ) {
      e.target.parentElement.parentElement.style.backgroundColor = "";
      work = false;
    } else {
      e.target.parentElement.parentElement.style.backgroundColor = "lightgreen";
      work = true;
    }
  }
})();
