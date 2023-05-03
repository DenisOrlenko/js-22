/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */
class Car1 {
    constructor({ brand, model, price } = {}) {
        console.log('это конструктор');
        console.log('this ->', this);
        this._brand = brand;
        this._model = model;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }
}
console.dir(Car1);

const newCar1 = new Car1({ brand: 'BMW', model: 'Q', price: 10000 });
console.log('newCar1:', newCar1);
console.log(Object.getPrototypeOf(newCar1));

console.log(newCar1.price); //вызов ГЕТТЕРА
console.log((newCar1.price = 9999999)); // вызов СЕТТЕРА - изм-е значения св-ва
console.log('newCar1:', newCar1); //КЛАСС - после изм-я значения св-ва, с помощью СЕТТЕРА

// ГЕТТЕРЫ и СЕТТЕРЫ - на примере объекта
const obj = {
    _a: 190,
    get a() {
        return this._a;
    },
    set a(x) {
        this._a = x;
    },
};
console.log(obj);
console.log(obj.a);
console.log((obj.a = 9999));
//

//
//
//
//
//
//
//
//
//
//
//
//
class Car {
    static description = 'Класс описывающий автомобиль';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

console.log(carInstance.model);
carInstance.model = 'Q4';
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 50000;
console.log(carInstance.price);

console.log(carInstance);
