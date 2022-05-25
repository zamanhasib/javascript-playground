class Person {
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduceSelf(){
        console.log(`hi, I am ${this.name}, I am ${this.age} years old!`);
    }
}

class Professor extends Person{
    subject;
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    takeClass(){
        console.log(`Professor ${this.name} teaches ${this.subject}`);
    }
}

class Student extends Person{
    #_class; // # makes it private
    constructor(name, age, _class){
        super(name, age);
        this.#_class = _class;
    }
    attendClass(){
        console.log(`${this.name} is in class ${this.#_class}`);
    }
}

const kaykobad = new Professor('Kaykobad', 60, 'Programming');
const tanaeem = new Student('Tanaeem', 20, 'L2T1');
kaykobad.takeClass();
tanaeem.attendClass();
//console.log(tanaeem.#_class); // can not access outside of class
console.log(Professor.prototype);