/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero1 {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }
    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior1 extends Hero1 {
    constructor({ weapon, ...restProps } = {}) {
        // super();
        super(restProps);
    }
}

const mango = new Warrior1({ name: 'Манго', xp: 100 });
console.log('mango:', mango);
mango.gainXp(1000);
console.log('mango:', mango);
//
//
//
//
//
//
//
//

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: 'ajax',
    xp: 500,
    weapon: 'axe',
    warcry: 'waaaaaaaah',
});

// console.log(ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то там кастует 🧙‍♂️`);
    }
}

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );

function pow(number, power) {
    if (power === 0) {
        return 1;
    }
    return number * pow(number, power - 1);
}
console.log(pow(2, 3));

const user = {
    animal: true,
};

class Dog {
    constructor(name) {
        this.name = name;
        this.isTail = true;
    }
    catName() {
        return cat1.name;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
        this.isTail = true;
    }
    catName() {
        return cat1.name;
    }
}
Cat.prototype.age = 5; // ! Для класса Cat - выношу в прототип св-во, чтобы экономить память при вызове КЛАССА Cat()
console.dir(Cat);
console.dir(Dog);

let cat1 = new Cat('Murchik'); // * Cat.prototype.age = 5
let cat2 = new Dog('Rex'); // * св-во age - отсутствует в ЕКЗЕМПЛЯРЕ КЛАССА Dog()

console.log('Cat:', cat1.catName.call(user));

console.log('cat1:', cat1);
console.log('cat2:', cat2);

console.dir(Cat);
console.log(Cat.prototype);
console.log(cat1);
console.log(cat1.__proto__);
console.log(cat1.prototype);
console.log(Cat.prototype === cat1.__proto__);
console.log(Cat.prototype === cat2.__proto___);
console.log('');

// Сравнение св-в КЛАССА(в контексте объекта) и Объекта
class User {}
const userNew = new User();
console.log(
    'User.prototype === userNew.__proto__',
    User.prototype === userNew.__proto__,
);
console.log('');

//
//
let a = 3;
console.log('a:', a);
a.__proto__.b = 7;
console.log('a.__proto__.b:', a.__proto__);
console.log('a.b:', a.b);
console.dir(Number);
console.log('Number.prototype:', Number.prototype);

console.log(a.__proto_ === Number.prototype);
console.log('');

let digit = 'word';
console.log('digit:', digit);
console.dir(String);
console.log('String.prototype:', String.prototype);

console.log('digit.__proto__', digit.__proto__);
console.log(digit.__proto__ === String.prototype);
//
//
//
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');

btn.addEventListener('click', f1);
// document.querySelector('.btn').onclick = function () {
//     console.log(this);
//     this.style.background = 'blue';
//     btn2.style.background = 'yellow';
// };
// или

const p = document.querySelectorAll('p'); // * querySelectorAll - объединяет эл-ты в массив
console.log('p:', p);

function f1() {
    console.log(this);
    btn.style.background = 'blue';
    this.style.background = 'orange';
    btn2.style.background = 'yellow';
}

for (let i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}

//
//
//
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Girl extends Person {
    constructor(name, gender) {
        super(name);
        this.gender = gender;
    }
}

const girl = new Girl('Anna', 'female');

console.dir(Person);
console.dir(Girl);
console.log('girl:', girl);

//
//
//
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
// btn3.onclick = test;
// btn4.onclick = test; //! при КЛИКЕ по btn3 => будет происходить вызов ф-ии
// btn4.onclick = test.bind(btn3); // КЛИК по btn4 - однако вызов  ф-ии test в контексте объекта btn3
//
// или
//
// btn4.onclick = function () {
//     test.call(btn3, 'yellow');
// }; // * КЛИК по btn4 - однако вызов  ф-и test в контексте объекта btn3

btn4.onclick = function () {
    test.apply(btn3, ['yellow', 555]);
};
function test(color, num) {
    console.log(this);
    this.style.background = color;
    console.log(num);
}
// test(); !!!! Error!!!!
// Call()
// function.call(context, [arg1, arg2....])
// test.call(b1); // вызывал функцию - this = b1
// test.call(btn3); // * вызов ф-ии test - в контексте объекта btn3

console.log(Object.prototype);
console.log({});
console.log({}.__proto__);
let u = String('o');
console.log('u:', u);
console.dir(String);
console.dir(new String());
console.log('');

const obj = {
    foo: () => console.log(this), // undefined - в НЕСТРОГОМ РЕЖИМЕ, в СТРОГОМ РЕЖИМЕ - ссылается на объект WINDOW;
};
obj.foo();
//

const obj5 = {
    objInside: {
        showCxtInside: () => console.log(this),
    },
    showCxtOutside: () => console.log(this),
};
//* СТРОГИЙ РЕЖИМ - undefined
//! НЕСТРОГИЙ РЕЖИМ
console.log(obj5.showCxtOutside()); //! - Window
console.log(obj5.objInside.showCxtInside()); //! - Window
console.log('');

const tag = 'js';
acc[tag] = 0; //! создание св-ва в объекте
[tag]; // * подстановка имени св-ва через переменную
// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
// };
