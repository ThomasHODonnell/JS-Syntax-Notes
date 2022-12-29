//Intermediate/ADV concepts in JS ES6-ES8

//static methods in classes 
// doing this to be able to access these methods without creating an //instance of a class 

class calc { 
    // constructor (); not using this class for data, rather its methods
    //so, we have no need for a con.
    static mult(a,b) {return a * b} //static keyword to access this 
    static add(a, b) {return a + b}
   }
   
   let a = calc.mult(3, 5)
   console.log(a)
   console.log(calc.add(9,10))
   
   //Differences between classes and prototypes: 
   
   //JS supports a prototypal inherience model 
   //classes are extrations on top of JS prototypes 
   //a prototype reveals an objects parent with the extend syntax 
   //all obj's have a prototype 
   
   //implementing an object prototype 
   
   function man(name, house, pet) {
     this.name = name
     this.house = house
     this.pet = pet
   
     this.greeting = () => `Hello, my name is ${this.name}!`
   } //can skip return keyword bc no braces 
   
   let Thomas = new man('Thomas ODonnell', 'Wood', 'Dog')
   console.log(Thomas.greeting()) 
   
   man.prototype.petName; //creates new field in constructor
   Thomas.petName = 'Pre'; //defining ^ 
   
   //man.prototype.info = () => `I used to have a pet named ${man.petName}`
   // console.log(man.info())
   // this doesnt work because arrow functions dont create a this object for 
   //the function prototype to reference 
     //the top one does because it is already a function prototype and is being placed on an object that can reference the this object
     //we can solve this by using a normal function to define a prototype
   
   man.prototype.info = function() {
     return `I used to have a ${this.pet} named ${this.petName}`
   }
   console.log(Thomas.info())
   
   //this is what JS classes behind the scenes
   //they take objects and their prototypes and simplify them for OOP
   
   
   //DATA STRUCTURES 
   
   //Sets - arrays without Duplicates
   //methods include 
     //add, has, delete among other in the first file. 
   
   let e = new Set();
   e.add(1)
   e.add('String')
   //you can create an object one line too 
   e.add({x:5,y:10})
   for (let entry of e) {
     console.log(entry)
   }
   //i dont know why but console.log(e) doesnt print in stackblitz
   console.log(e.size)
   console.log(e.has(2))
   
   //can convert array to set to remove deconstruct
   
   let values = [1, 3, 5, 7, 9]
   let valuesSet = new Set(values)
   console.log(valuesSet) //again this doesnt print, shows empty set    //when its not empty
   
   let numbers = [3,3,9, 13]
   let numsSet = new Set(numbers)
   for (let elem of numsSet) {
     console.log(elem) //prints each unique number
   }
   
   
   //find unique chars in a string 
   let chars = 'lkjsadhfrn;sca'; 
   let chars_arr = chars.split(''); 
   let charsSet = new Set(chars_arr)
   console.log(charsSet) //doesnt show full set, same issue 
   
   
   //MAPS 
   //have keys - can be strings, primitives, objs, and even functions   // but keys cannot have a duplicate  
   //have values per key
   //Maps have functions such as 
     //set
     //get
     //has
     //clear
     //size
     //delete
   
   let map = new Map(); 
   let key = 'string key'
   map.set(key, 'return value for key')
   console.log(map) //same issue as Sets in stackblitz
   //not showing entire Map when I call this, instead have to be more specific
   
   let key2 = {A: 'key2'}
   map.set(key2, 10) //object as key, integer as value 
   console.log(map.get(key2))
   
   let key3 = function() {}
   map.set(key3, 'return value for function key')
   console.log(map.has(key3))
   //I think a console.log(map) would work in browser
   
   let numArr = [[1, 'one'], [2, 'two']] //2D array declaration 
   let valMap = new Map(numArr); 
   console.log(valMap)
   
   //can iterate through a map using keys, values, or entries 
   
   for (let [k,v] of valMap.entries()) {
     console.log(k, v)
   }
   
   let string = 'skjdkjdsbvjfdbv'
   let letters = new Map(); 
   for (let i = 0; i<string.length; i++) { //.length for string size
     let letter = string[i] //same syntax as C++
     if (!letters.has(letter)) {//to cases to account for 
       letters.set(letter, 1)
     }
     else {
       letters.set(letter, letters.get(letter) + 1)
     }
   }
   
   for (let entry of letters.entries()) { //printing this way to ensure
     //I did it correctly
     console.log(entry)
   }
   
   /*CLOSURES
   represent functions that know the enviornment they were created  in 
   and can references variables in that env
   This enables private data 
   */
   
   let call = () => {
     let secret = 'I love math!'; 
     let reveal = () => console.log(secret);
     reveal(); 
   }
   //cannot print secret because of scope, so //
   call();
   
   //FUNCTION FACTORIES 
   // take args and return new functions 
   
   const addSuffix = (x) => {
     const concadinate = (y) => {
       return y + x; 
     }
     return concadinate 
   }
   
   let add_ness = addSuffix('ness') //stores ness in x
   let happy = add_ness('happi') //stores happi in y 
   console.log(happy) //works because calling add_ness layers these strs
   
   
   const mult = (a) => b => b * a //both syntaxs work the same
   let mult5 = mult(5)
   console.log(mult5(3))
   
   //PRIVATE METHODS 
   // same concept as java and c++ classes through JS closures
   
   const budget = () => {
     let balance = 0.00; 
     let changeBal = (val) => balance += val; 
     const dep20 = () => changeBal(20); 
     const with20 = () => changeBal(-20)
     const check = () => balance; 
     return { //return is an object with key dep20
       deposit20: dep20,
       withdrawl20: with20,
       check: check //if names are same like this, could 'with20, check'
     }
   }
   
   let wallet = budget()
   console.log(wallet)
   wallet.deposit20(); 
   console.log(wallet.check()) //can call balence because its not in
   //the return statement, its private 
   wallet.withdrawl20(); 
   console.log(wallet.check())
   
   //GENERATORS
   //allows functions to break the typical 
   //'run to completion' 
   //gens can pause and resume inside the function
     //with the yield and next() syntax
   //helps with control flow and iterators in functions
   
   function* letter() { //the * signals a gen function
     yield 'a'; 
     yield 'b'; 
     yield 'c'
   }
   
   let letterGen = letter(); //dont need new keyword with gen functions 
   console.log(letterGen.next().value) //prints a 
   console.log(letterGen.next().value)
   console.log(letterGen.next().value)
   console.log(letterGen.next().value) //gives undefined
   
   function* count() {
     let count = 0; 
     while (count < 3){ //while loops are same as c++
       yield count += 1; 
       console.log('Hello!')
     }
   }
   let counter = count(); 
   console.log(counter.next().value)
   console.log(counter.next().value)
   console.log(counter.next().value)
   console.log(counter.next().value) //undefined 
   
   function* evens() {
     let count = 0; 
     while (true) { //intentionally infinte 
       count += 2
       let reset = yield count; 
       if (reset) {count = 0;}
     }
   }
   
   
   let sequence = evens()
   console.log(sequence.next().value)
   console.log(sequence.next().value)
   console.log(sequence.next().value)
   console.log(sequence.next(true).value) //reset becomes true so, 2
   console.log(sequence.next(false).value) //4\
   
   //gens vs iteration 
   
   //itertator 
   const arrIt = (array) => {
     let index = 0;  
     return { 
       next: () => {
         if (index < array.length) { //not size() 
           let next = array[index]
           index++;
           return next;
       }
     }
   }
   }
   
   let iterator = arrIt([1, 2, 3, 4, 5])
   console.log(iterator.next())
   console.log(iterator.next())
   
   
   //gen
   function* arrIterator() {
     // yield arguments; //arguments is a keyword 
     //want to print each value so 
     //for (let arg of arguments) {
       //yield arg; //when using yield more than once in a row we can ...
       yield* arguments; 
     }
   
   let it = arrIterator([3, 4, 5])
   console.log(it.next().value)
   
   //remember gens have a start, pause, and reset capability
   //therefore, they can be more effecient than iteration in many use cases 
   
   
   //ASYNC PROG AND PROMISES 
   //async meaning the program diverts blocking to event handlers
   //therefore, a program can keep running while waiting for data 
     //databases, servers, API interaction 
   //this is done in JS with promises 
   //Promises have three current states
     //pending, fuffilled, and rejected 
   
   let promise = new Promise( (resolve, reject) => {  //within promise construct,
   //there are 2 params used for control flow 
   //these represent handlers tasked with updating the state of the promise 
   //resolve - success
   //reject - could not determine or failure 
   
   //resolve('resolved promise'); //.then allows us to access this data in a promise 
   
   //reject('rejected promise'); 
   
   setTimeout( () => resolve('resolved'), 1000) // in milliseconds 
   });
    promise.then(
      response => console.log(response), 
    //  reject => console.log(reject)) //response accepts .thens return 
    ).catch(error => console.log(error))
   
    console.log('after promise') //prints before promise, bc waits 1 second 
   
   
    //HTTPS AND FETCH
    //fetch is a keyword designed to work with API's 
    //HTTP -> HyperText Transfer Protocol's 
     //defines how data on the internet communicates 
       //HTTP has 5 primary requests 
         //GET -> retrieves data (html resource or JSON object)
         //POST -> sends data to a server 
         //HEAD -> meta info such as a title 
         //DELETE -> removes a specified resourse 
         //PATCH -> modifies part of a specified resourse 
         //among a dozen or so others (see postman for dummy HTTP requests)
   
   
   //USING https://jsonplaceholder.typicode.com/ FOR DUMMY DATA 
   //starting at posts/1
   
   const rootURL = 'https://jsonplaceholder.typicode.com/posts/1'; 
   
   fetch(rootURL, {method: 'GET'}) //takes URL, then specified method
     .then(response => response.json()) //this is a promise bc needs to wait 
     // for data
     .then(json => console.log(json)) 
   
   
   const root2 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
   
   fetch(root2, {method: 'GET'})
     .then(res => res.json())
     .then(json => console.log(json))
   
   
   //NEW IN ES7
   
   let expo = Math.pow(2,5) //same syntax as C++
   console.log(expo)
   
   let expo2 = 2**2 //new way to do it 
   console.log(expo2)
   
   let aString = 'wonderful'.includes('wonder')
   console.log(aString) //returns true or false 
   
   //extends to arrays
   
   let array = [1, 2, 3]
   console.log(array.includes(3)) //true 
   
   //ES8 
   
   let obj = {a: 1, b: 2, c: 3}
   let keys = Object.keys(obj); //object is keyword here
   console.log(keys) //.keys could be .values or .entries
   
   let entries = Object.entries(obj)
   for (let entry of entries) {
     console.log(`keys: ${entry[0]}, value: ${entry[1]}}`)
   }
   
   //ASYNC
   //simplify async programming thru async functions 
   
   async function async1() {
     return 'one'
   }
   async1().then(response => console.log(response))
   
   async function async2() {
     throw new Error('issue in async 2')
   }
   async2().catch(response => console.log(response))
   
   //simple throw and catch block 
   //similar syntax to C++
   
   //AWAIT
   
   async function async3() {
     const one = await async1(); //waits for response from async1
     console.log(one) //then continues 
   } //this ensures that data will not go undef. if taking awhile 
   async3(); 
   
   //could layer several await keywords calling functions here
   //the function would not exit until all of the data had arrived
   
   async function async4() {
     const [res1, res2] = await Promise.all(
       [async1(), async3()] //promise.all runs concurrently
     )
     console.log(res1, res2)
   }
   async4(); 