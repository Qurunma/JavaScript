let users = [];

for (let index = 0; index < 6; index++) {
  users[index] = {
    login: `user${index + 1}`,
    password: `passworduser${index}`,
  };
}

let loginInput = prompt("Введите логин");
let passwordInput = prompt("Введите пароль");

function checking(users, loginInput, passwordInput) {
  let rightAutorisation = false;
  for (let index in users) {
    if (
      users[index].login == loginInput &&
      users[index].password == passwordInput
    ) {
      alert(`Приветствуем, ${users[index].login}`);
      rightAutorisation = true;
    }
  }
  if (!rightAutorisation) {
    alert("Неверный логин или пароль, ошибка авторизации");
  }
}

checking(users, loginInput, passwordInput);
