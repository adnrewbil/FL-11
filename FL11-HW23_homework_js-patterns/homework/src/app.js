class User {
  constructor(name, weekendDiscount = 0, nightDiscount = 0) {
    this.name = name;
    this.orderTotalPrice = () => 0;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
  }

  addItem(item) {
    const price = this.orderTotalPrice();
    this.orderTotalPrice = () => price + item;
  }

  makeOrder() {
    return `Price after discount and including bonuses is ${this.orderTotalPrice()}`;
  }
}

const setBonus = (user) => {
  const cart = user;
  const price = user.orderTotalPrice();
  cart.orderTotalPrice = () => price - ((price * 5) / 100);
};

const getDiscount = (user) => {
  const cart = user;
  const price = cart.orderTotalPrice();
  let bonusCounter = 0;
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();

  if (day >= 6 || day <= 0) bonusCounter += cart.weekendDiscount;
  if (hours <= 6 || hours >= 23) bonusCounter += cart.nightDiscount;
  cart.orderTotalPrice = () => price - ((price * bonusCounter) / 100);
};

const ivan = new User('Ivan', 20, 30);

ivan.addItem(100);
ivan.addItem(200);
ivan.makeOrder();
setBonus(ivan);
ivan.makeOrder();
getDiscount(ivan);
ivan.makeOrder();

// Напишу варіант використання вашого декоратора
// cart = new Cart();
// cart.addItem(100);
// cart.addItem(200);
// cart.makeOrder(); // ‘Price after discount and including bonuses is 300’
// setBonus(cart);
// getDiscount(cart);
// cart.makeOrder(); // ‘Price after discount and including bonuses is 250.45’ (300 - bonuses - discount)
// перший консоль лог без знижки, другий вже зі
