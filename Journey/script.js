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
      : alert("не достатньо коштів");
    break;
  case "2":
    money >= 1000
      ? alert("Вітаю! Заявка оформлена")
      : alert("не достатньо коштів");
    break;
  case "3":
    money >= 1500
      ? alert("Вітаю! Заявка оформлена")
      : alert("не достатньо коштів");
    break;
  default:
    alert("Такого варіанту не існує");
    break;
}
