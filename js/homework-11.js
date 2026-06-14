class Drink {
  constructor(name, size, price, temperature) {
  if(new.target === Drink) {
    throw new Error('Нельзя создать экземпляр класса Drink')
  }

  this.name = name;
  this.size = size;
  this.price = price;
  this._temperature = temperature;
}

getInfo() {
  return `Name: ${this.name}, Size: ${this.size}, Price: ${this.price}`
}

getTemperature() {
  return `Temperature: ${this._temperature}`
}

setTemperature(newTemp) {
  this._temperature = newTemp
}

_prepare() {
  this._temperature = 70;
  console.log(`Ваш ${this.name} готовится!`)
}

serve() {
  console.log(`Ваш ${this.name} в процессе приготовления!`)
  this._prepare()
  console.log(`Ваш ${this.name} готов и подан!`)
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, aroma, milkType) {
    super(name, size, price, temperature)

    this.aroma = aroma;
    this.milkType = milkType;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature)

    this.teaType = teaType;
  }
}

class Soda extends Drink {
  constructor(name, size, price, temperature, flavor, isSugar) {
    super(name, size, price, temperature)

    this.flavor = flavor;
    this.isSugar = isSugar;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

getInfo() {
  return `Name: ${this.name}, Location: ${this.location}`
}

orderDrink(drink) {
  console.log('Ваш заказ принят!')
  drink.serve() 
  }
}

const cafe = new Cafe ("Coffee Time", "New York")

const lemonade = new Soda (
  "lemonade",
  "small",
  150,
  12,
  "lemon",
  "no sugar"
)

cafe.orderDrink(lemonade)