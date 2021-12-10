class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this. gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const person = {
    name: 'JNYLee',
    age: 21,
    gender: 'male'
};

const sayHi = (person: Human): string => {
    return `Hello my name is ${person.name}, My age is ${person.age} and Im a ${person.gender}!`;
};

console.log(sayHi(lynn));

export {};