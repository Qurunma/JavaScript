let summ = 10;
let numOfGoods = 1;
let promo = "ДАРИМ300";

discounts(summ, numOfGoods, promo);

function promo1(summ) {
  console.log("Промокод 'ДАРИМ300' введен, применена скидка в 300р");
  if (summ > 300) {
    return summ - 300;
  } else if (summ <= 300) {
    return 0;
  }
}

function numsOfGoods(summ) {
  summ = summ - (summ * 0, 05);
  console.log("Кол-во товаров больше 10, скидка применена");
  return summ;
}

function summDiscount(summ) {
  summ = summ - (summ - 50000 - (summ - 50000) * 0.2);
  console.log("Сумма чека больше 50000, скидка применена");
  return summ;
}

function promo2(summ, promo) {
  summ = summ - summ * 0.15;
  console.log("Промокод 'СКИДКА15' введен, скидка применена");
  return summ;
}

function discounts(summ, numOfGoods, promo = null) {
  if (promo === "ДАРИМ300") {
    summ = promo1(summ);
  }
  if (numOfGoods >= 10) {
    summ = numsOfGoods(summ);
  }
  if (summ > 50000) {
    summ = summDiscount(summ);
  }
  if (promo === "СКИДКА15" && summ >= 20000) {
    summ = promo2(summ);
  }
  console.log(`Сумма после применения скидок равна ${summ}`);
}
