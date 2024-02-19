let price = +prompt("Ціна товару: ");
let promotionalСode = prompt("Промокод на знижку: ");
let quantity = +prompt("Кількість товару: ");
let discountQuantity;
let discountSum = 0;
let totalDiscount;
let totalPrice;

switch (promotionalСode) {
  case "NEWYEAR":
    promotionalСode = 0.8;
    break;
  case "BLACKFRIDAY":
    promotionalСode = 0.7;
    break;
  case "SUMMERSALE":
    promotionalСode = 0.85;
    break;
  default:
    promotionalСode = 0.95;
    break;
}

quantity >= 3 ? (discountQuantity = 0.95) : (discountQuantity = 1);
totalDiscount = promotionalСode + discountQuantity - 1;
totalPrice = price * quantity * totalDiscount;

if (totalPrice >= 1000) {
  totalPrice = totalPrice * 0.9;
  discountSum = 10;
}

if (totalPrice && quantity > 0) {
  if (discountSum > 0) {
    alert(
      `Загальна знижка: ${Math.round(
        100 - totalDiscount * 100
      )}%\nДодатковка знижка за суму: ${discountSum}%\nЦіна зі знижкою: ${totalPrice.toFixed(
        2
      )} грн`
    );
  } else {
    alert(
      `Загальна знижка: ${Math.round(
        100 - totalDiscount * 100
      )}%\nЦіна зі знижкою: ${totalPrice.toFixed(2)} грн`
    );
  }
} else {
  alert("Помилка у введених даних");
}
