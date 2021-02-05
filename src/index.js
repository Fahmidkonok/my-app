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

const square = number => number * number;
console.log(square(5));
