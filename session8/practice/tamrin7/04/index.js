'use strict'
// Only change code below this line
class TransportA {
    constructor(name, type, count) {
        this.name = name;
        this.type = type;
        this.count = count;
    }
    passenger() {
        console.log(`this ${this.name} has ${this.count} passenger`);
    }
    path() {
        console.log(`The path of ${this.name} is straight`);
    }

}

const transportAins1 = new TransportA("bus", "public", 300);
console.log(transportAins1.name);
console.log(transportAins1.count);
(transportAins1.path());
(transportAins1.passenger());

class TransportB extends TransportA {
    constructor(name, type, count, price, color) {
        super(name, type, count)

        this.price = price;
        this.color = color;
    }
    holiday() {
        console.log(`${this.name} is holiday friday`);

    }
    cost() {
        console.log(`${this.name} is up 2$ cost`);
    }
}
const transportBins1 = new TransportB('taxi', 'public', '4', '5$', 'yellow');
console.log(transportBins1.name);
console.log(transportBins1.count);
console.log(transportBins1.color);
transportBins1.cost();
transportBins1.passenger();

class TransportC extends TransportA {
    constructor(name, type, count, width, number) {
        super(name, type, count);
        this.width = width;
        this.number = number;
    }
    length() {
        console.log(`The ${this.name} is 5m length`);
    }
    Num() {
        console.log(`The ${this.name} is like ${this.number} bus`);
    }
}
const transportCins1 = new TransportC('subway', 'public', '500', '10M', 5);
console.log(transportCins1.name);
console.log(transportCins1.width);
transportCins1.path();
transportCins1.Num();