let person = "Jan";
var person1 = "Ania";
const person2 = "Pawel";

person = "Andzrej";
person1 = "Asia";

alert("dsa");
console.log(2);

2 + 2;
2 - 2;
2 * 2;
2 ** 4;
2 / 2;
3 % 2;

let numOp = 2;
numOp++;
numOp--;

true;
false;

const a1 = "a1";
const a11 = '"a2"';

const a2 = "a2";
const a22 = "'a2'";

const a3 = `a3`;
const a33 = `a3 ${222}`;

const cars = ["Saab", "BMW", "Audi"];

console.log(cars[cars.length - 1]);

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

console.log(car.type);

let hour = 127;

let isOpen = true;
console.log(hour < 18);
if (hour === 0) {
  console.log("godzina musi byc ,..");
} else if (hour < 18) {
  console.log("Good day");
} else if (hour < 18) {
  console.log("Good day");
} else if (hour < 18) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

let day = 4;
// new Date().getDay()
switch (day) {
  case 0:
    console.log("zero");
    break;
  case 1:
    console.log("jeden");
    break;
  case 2:
    console.log("dwa");
    break;
  default:
    console.log("brak liczby");
}

if (day === 0) {
  console.log("zero");
} else if (day === 1) {
  console.log("jeden");
} else if (day === 2) {
  console.log("dwa");
} else {
  console.log("brak liczby");
}
const a = 500;
const b = 0;
const c = 50;
for (let i = a; i >= b; i -= c) {
  console.log("mam lat:", i);
}

function myFunction(p1, p2) {
  return p1 * p2;
}

const hello = function () {
  return "Hello World!";
};

const arrFc = (a, b) => a * b;

const arrFcWithScope = (a, b) => {
  console.log("hello");
  return 222;
};

const newAge = arrFcWithScope();

class Car {
  constructor(name1, year1) {
    this.name = name1;
    this.year = year1;
  }
}

const myCar = new Car("Ford", 2014);

myCar.name;

const [sto, siedem, dwa] = tab;

const obj = {
  name: "Jan",
  surname: "Kowalskii",
  adress: {
    street: "sdsd",
  },
};
const tab22 = [32, 2332];
// @ts-ignore
const {
  name: imie,
  surname: nazwisko,
  adress: { street: ulica },
} = obj;

try {
  // @ts-ignore
  throw new Error("error1");
  console.log("success");
} catch (err) {
  console.log(err.message);
}

const secondFunc = (kon) => {
  const obj2 = {
    userName: "Janusz",
    userSurname: "Kowal",
    userAge: "515",
  };
  const kon1 = [obj2.userName, obj2.userSurname, obj2.userAge];
  return kon1;
};

const isMap = (arr, callbak) => {
  return callbak(arr);
};
