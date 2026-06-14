class Furniture {
  constructor(name, material, price) {
    this.name = name;
    this.material = material;
    this.price = price;
  }

  getInfo() {
    return `${this.name}, материал: ${this.material}, цена: ${this.price}₽`;
  }
}

class Chair extends Furniture {
  constructor(name, material, price, legsCount) {
    super(name, material, price);
    this.legsCount = legsCount;
  }
}

const chair = new Chair(
  "Офисный стул",
  "Дерево",
  7000,
  4
);

console.log(chair);
console.log(chair.getInfo());