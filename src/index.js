//var -> function
// let -> block
// const -> block

/*
const person = {
  name: "konok",
  walk() {
    console.log(this);
  }
  };
  
person.walk();

const walk = person.walk.bind(person);
walk();
*/
/*
const square = function(number) {
  return number * number;
}
*/

// const square = number => number * number;
// console.log(square(5));

/*
const jobs = [
  { id: 1, isActive: true},
  { id: 2, isActive: true},
  { id: 3, isActive: false},
];

// const jobs.filter(function(job) { return job.isActive; });
const  activeJobs = jobs.filter(job => job.isActive);

*/


// Arrow Function and this

/*
const person = {
  talk() {
    var self = this;
    setTimeout(function() {
      console.log("self", self);
    },1000);
  }
};

person.talk();

*/

//array : map

/*
const colors = ['red', 'greeen' ,'Blue']
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
*/

//Object Destructuring

/*
const address = {
  street: '',
  city: '',
  country: '',
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

const {street: st } = address;

*/

// Spread operator

/*
const first = {name: "Mosh"};
const second = {job: "instructor"};

// const combined = { ...first, ...second, location: "Australia" };
// console.log(combined);

const clone = {...first};
*/


// Classes + Inheritance + modules

//Named and Default Exports//


import Teacher, { promote } from "./teacher";

//Named -> import {.......} from '';
//Default -> import .....from '';

const teacher = new Teacher("Mosh", "Msc");

teacher.teach();