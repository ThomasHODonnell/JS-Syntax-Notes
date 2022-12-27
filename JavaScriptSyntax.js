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
    //functions in a parent class
    start() { //do not need to name data types 
      console.log('Starting ...')
    }
    stop() {
      console.log('Stopping ...')
    }
  }
  
  class threeSeries extends BMW { //extends is inheritence keyword
    constructor (make, model, year, cruiseControl) {
      super(make, model, year);  //super connects descending traits 
      this.cruise = cruiseControl; 
    }
  
    start() {
      console.log('Starting ... in the child class.')
    }
  }
  
  let vehicle = new threeSeries('BMW', '328', 1999, true);
  console.log(vehicle.year) 
  
  vehicle.start(); //need to use an instance to call these functions 
  vehicle.stop(); 
  
  //PROMISES
  //accepts inner function as parameter 
    //where we define async code
  //using setTimeout function rather than async and await in react 
    //takes to args, function which runs async code, then time until code is ran (milliseconds)
  //promises are often used inside functions so they can be used procedurally 
  
  //can use logic from recieved API data with the resolve and reject keywords
    //their accepted as a promise param (names are convension)
  
  function asyncCode() {
  let promise = new Promise( (resolve, reject) => {
    let error = false; //always false here, just want to show how this works 
    setTimeout( () => {
      console.log('Running async promise')
      if (error) { //using some control flow to determine success or failure 
      resolve(); //like a break statement for async code 
      }//could throw the error message in the resolve call and '*' ... see function call 
      else {
        reject(); 
      }
    }
    , 2000) //2 second from function call 
  }); 
    return promise; 
  }

  //.then is an error handler
    //accepts to args: success function, then failure function
  //used in accordance with res, rej
  asyncCode().then(
    () => { //'*'could accept some paramater here, print the same param that is text above  
      console.log('Success') //so if it hits res, this code will be ran 
    },
   /* () => {
       commenting this out to use a catch block 
      console.log('Failure') //if reject is hit, this is ran 
      
    } */
  ).catch( () => {
    console.log('Error')
  });
  
  
  //MODULES 
  //use the import and export keywords to call external functions or files 
  //not using any other files here so cant use the import 
  //Where CORS comes in 
  
  export function div (num1, num2) {
    return num1/num2; 
  }
  
  //import would ... 
  //import {div} from '/index.js'; 