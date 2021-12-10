"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 18, "female");
const person = {
    name: 'JNYLee',
    age: 21,
    gender: 'male'
};
const sayHi = (person) => {
    return `Hello my name is ${person.name}, My age is ${person.age} and Im a ${person.gender}!`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map