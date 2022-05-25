//closure
function foo() {
  const secret = Math.trunc(Math.random() * 100);
  return {
    inner() {
      console.log(`The secret number is ${secret}.`);
    },
    another() {
      console.log("this is nother func");
    },
  };
}
const f = foo();
//f.inner();
//f.another();

// prototype
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype = personPrototype;
Person.prototype.constructor = Person;

const reuben = new Person("Reuben");
//reuben.greet(); // hello, my name is Reuben!

Array.prototype.upperCase = function () {
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
var sub = ["Algorithm", "Data Structure", "Operating System", "html"];
sub.upperCase();
//console.log(sub.join(', '));

// call / apply / bind
const person = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + ", " + city + ", " + country
    );
  },
  name: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "hasib",
  lastName: "zaman",
};

//person.fullName.call(person1, 'hougang', 'singapore');
//person.fullName.apply(person1, ['seattle', 'usa']);
const myName = person.name.bind(person1);
//console.log(myName());

// filter/map/reduce
const result = [
  { name: "asif", subject: "physics", score: 82 },
  { name: "asif", subject: "math", score: 90 },
  { name: "asif", subject: "chemistry", score: 76 },
  { name: "nobel", subject: "math", score: 60 },
  { name: "nobel", subject: "chemistry", score: 66 },
];

// get total score of asif
const totalScore = result
  .filter((student) => student.name === "asif")
  .reduce((sum, subject) => sum + subject.score, 0);
console.log(totalScore);

// get average score of asif
const count = result.filter((student) => student.name === "asif").length;
const avgScore = totalScore / count;
console.log(avgScore);

// get numbers of asif
const scores = result
  .filter((s) => s.name === "asif")
  .map((x) => {
    return {sub: x.subject, score: x.score}
  });
console.log(scores);
