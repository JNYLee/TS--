const myName = "JNYLee",
    myAge = 21,
    myGender = 'male';

const sayHi = (name, age, gender?) => {
    console.log(`Hello my name is ${name}, My age is ${age} and Im a ${gender}!`);
};

sayHi(myName, myAge);

export {};