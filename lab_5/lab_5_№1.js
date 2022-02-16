let emailNotChecked = [
  "user1@mail.ru",
  "user2@gmail.com",
  "user3",
  "313213",
  "3213214@rambler.ru",
  "e131ea@yandex.com",
  "3213213",
  "user1",
  "dsadasdwads",
  "dwadwadsa",
];
let emailBlackList = ["user3", "313213", "3213213", "user1", "dwadwadsa"];
let emailWhiteList = [];
let indexOfBlackList = [];

emailWhiteList = filter(emailNotChecked, emailBlackList);

function filter(emailNotChecked, emailBlackList) {
  let index2 = 0;

  for (let index in emailBlackList) {
    indexOfBlackList.push(emailNotChecked.indexOf(emailBlackList[index]));
  }
  for (index = 0; index < emailNotChecked.length; index++) {
    if (indexOfBlackList.includes(index)) {
      continue;
    } else {
      emailWhiteList[index2] = emailNotChecked[index];
      index2++;
    }
  }
  return emailWhiteList;
}
console.log(emailWhiteList);
