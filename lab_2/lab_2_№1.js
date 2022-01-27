let password = "23-";

password.length >= 4 && (password.includes("-") || password.includes("_")) ? console.log("Пароль корректный") : console.log("Пароль некорректный");