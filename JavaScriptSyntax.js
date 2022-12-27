/*Intro to data types

There are three DT's in Js 

1. Let - local variable, replaces Var's in ES6
2. Var - global variable
3. Const - constant type 
*/

function typeEx() {
  var i = 10; //semi's are not required, auto inputted, good practice to use semi's to ensure proper flow
  for(/*var*/ let i = 0; i <= 5; i++) { //for loop syntax 
    console.log(i)
  }
  console.log(i); //when using a let, output is 10 (local i = 0-5)
  //when using var, output is 6 (failed then i++)
}
typeEx(); 

const pi = 3.14; 
// pi = 3.69 bc const cannot be redefined
// could be if this was a var 

const product = Object.freeze({});  //makes it so the object can not be extended
//product['name'] = 'Iphone'

//TEMPLATE STRINGS 
// format strings in JS 

let name = 'Thomas' //can be inserted in other strings 
let quote = `You are the 
creator 
of your 
own destiny ${name}`; // must use the backwards apostrophy here  
console.log(quote)

//ARROW FUNCTIONS

let x = () => {
  console.log('x') //could return 'x' instead 
}
x(); 

let add = (num1, num2) => { //full syntax for arrow functions 
  return num1 + num2;
}
console.log(add(6,9)); 

let student = { //syntax for creating an object 
  firstName: 'Thomas',
  lastName: 'ODonnell',
  age: 19
};

//object Destructuring 
//there are a few ways to use the objects 
const first = student.firstName; 
const last = student.lastName; 
const age = student.age; 

const {firstName: one, lastName: two, age: three} = student; 

console.log(first)
console.log(two)

//array detructuring
const frameworks = ['Angular', 'React', 'Node']
const [four, five, six] = frameworks 
console.log(four)

//function destructuring 
function mult(options) { //using options inside the paramater list means it accepts any # 
  console.log(options.num1 * options.num2 * options.num3)
}
mult({num1:1,num2:2,num3:3})

//there are 3 for loops in JS 
//for loop I am familiar with is called for of loop?
//can use continue and break statements with it 

let names = ['Bob', 'tim', 'mosh']

for (let value of names) { //value takes one value of names at a time 
  console.log(value) //if used names it prints all three names 
}

//MAPS
//have a string and a value per subscript
//several ways to add values to map 

//Maps have 6 methods 
  //set
  //get
  //has
  //clear
  //size
  //delete
let scores = new Map([['Math', 101]]); //can also add here w , sep list of [,] 
//requires -> Map([[,]])
scores.set('Phys', 97) 

scores.get('Math') //set function

console.log(scores.get('Phys')) //get function

console.log(scores.size) //size function

console.log(scores.has('Phys')) //has method, bool return value

scores.delete('Phys') //delete function 

console.log(scores.size)

scores.clear()  //clear function, requires () since no param  

console.log(scores.size)

//new map since I cleared the last

let score = new Map([['CSC', 93], ['DL', 92]]); 

for (let key of score.keys()) { //keys refers to string
  console.log(key)
}

for (let value of score.values()) { //value is value 
  console.log(value)
}

for (let [k,v] of score.entries()) { //entries is both string and value seperated with a space
  console.log(k,v)
}

//A set is a map of just strings 
//Sets have the similar functions as map
//add, size, clear, has 
//can pass in array, same as map instead of .add
let family = new Set(); 
family.add('Dad')

for (let entry of family) {console.log(entry)} //prints strings 

//CLASSES 

class Passenger {
  constructor (firstNameOfPerson, lastNameOfPerson, frequentFlyer) {
    this.nameFirst = firstNameOfPerson; //always use .this rather than trying to name another vari
    this.nameLast = lastNameOfPerson; 
    this.frequentFlyer = frequentFlyer;
  }
}

let person = new Passenger('Tom', 'ODonnell',123);
console.log(person.nameFirst)

//INHERITANCE

class BMW {
  constructor (make, model, year) {
    this.make = make;
    this.model = model; 
    this.year = year; 
  }
}

class threeSeries extends BMW { //extends is inheritence keyword
  constructor (make, model, year, cruiseControl) {
    super(make, model, year);  //super connects descending traits 
    this.cruise = cruiseControl; 
  }
}

let vehicle = new threeSeries('BMW', '328', 1999, true);
console.log(vehicle.year) 