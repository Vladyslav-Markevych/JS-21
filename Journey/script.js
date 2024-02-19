let money = +prompt("Ваш бюджет: ");
let country;

if (isNaN(money)) {
  alert("Некоректна сума");
  location.reload();
} else {
  alert("Бюджет зараховано");
  country = prompt(
    "Оберіть країну(1)(2)(3):\n1. Україна\n2. Таїланд\n3. Італія"
  );
}

switch (country) {
  case "1":
    money >= 500
      ? alert("Вітаю! Заявка оформлена")
      : alert("Нажаль, не достатньо коштів");
    break;
  case "2":
    if (money >= 1000) {
      alert("Вітаю! Заявка оформлена");
    } else if (money >= 500) {
      alert("За Вашим бюджетом доступна тільки Україна");
    } else {
      alert("Нажаль, не достатньо коштів");
    }
    break;
  case "3":
    if (money >= 1500) {
      alert("Вітаю! Заявка оформлена");
    } else if (money >= 1000) {
      alert("За Вашим бюджетом доступні Таїланд або Україна");
    } else if (money >= 500) {
      alert("За Вашим бюджетом доступна тільки Україна");
    } else {
      alert("Нажаль, не достатньо коштів");
    }
    break;
  default:
    alert("Такого варіанту не існує");
    break;
}
