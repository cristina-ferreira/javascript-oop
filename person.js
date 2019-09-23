class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    tellMyName() {
        console.log(`I am ${this.name}`);

    }

    tellMyAge () {
        console.log(`I am ${this.age} years old`);
    }
}

const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);

person1.tellMyName();
person2.tellMyAge();
