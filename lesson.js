console.log(`I am a string
continues on this line`);

//with strings not possible
// console.log("string text 
// 1\n" +  "string text2");

console.log("string text1\n" +  "string text2");


const name = "Jimmy"
const day = "wednesday"
const instructor = {
    name:  "chris",
    lesson: "ES6",
    greet: function(){
        return `Hello ${this.name} whatever lesson is ${this.lesson}`
    }
}

console.log("Hello" + name + "I hope you have a graet day on" + day);

console.log(`Hello ${name} I hope ${day} goes well`) 

//console.log(`Hello ${instructor.name} whatever lesson is ${instructor.lesson}`)

console.log(instructor.greet())
//var- has global scope and its function, are hoisted to the top of the function
//let- scope is to the nearsest block,  loop,  you have more control over variables, lexical scope, not affected by closure.
//------------------------------------------------------------
function foo(){
    let x = true;
    if (x) {
        //var usingVar = 'in using var';
        //var should be at the top   
        //so let should be used otherwise it gives undefined  so 
        let usingVar = "in using let";

    }
    console.log(usingVar)
}
foo();

//const creates a constatnt,  can't be reassigned or redeclared.
const instructos = ["Jim", "Christ"]                          
instructos = ["Jim", "chris"]
// will give you type error
//but you can still update it like-- but can modify the contents
//so objects, arrays , functions can be modified
instructos.push( "Jack", "Jill")

//variables declared with lowercase but const accepts uppercase too


//Default parameters are default arguments to your functions 
function hello (name) {

    name = name || 'Mystery Person';

    console.log("HEllo" + name + "!")

}

hello("Bobby"); // gives HelLo Bobby
hello(); //

//default parameters
function hello (day, name = 'Mystery Person' ) {
    console.log(`Hello ${name} is it me}`)
}

//Arrow functions 1

const teacher = {
    name: "Jimm",
    speak: function(){
       let boundfunction = function(){
           // explicitly bind a function to specific context?  use .bind(this)
           console.log("later my name is" + this.name);
       }.bind(this);
       ////bound function will always run in bound context
       setTimeout(boundfunction,1000);
    }
}

teacher.speak();

const teacher = {
    name: "Jimm",
    speak() {
       let boundfunction = () => {       //arrow function does lexical binding means bind to the scope for where they are defined not where they are used
           
           console.log("later my name is" + this.name);
       };
       setTimeout(boundfunction,1000);
    }
}

teacher.speak();
//----------------------------------------------------------------------

let students = [
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: 'Taylor'},
    {name: 'Dimitri'}
];
let names = students.map((value) => value.name);
//same as
let names = students.map((student) => {
    return student.name
})
console.log(names);

//--------------------------------------------------------------

function add() {
    console.log ("arguments obeject:", arguments);
    var numbers  = Array.prototype.slice.call(arguments);
    var sum = 0;
    numbers.forEach(function (number){
        sum +=number;
    }).forEach(element => {
        
    });
     return sum;

}

console.log(add(1,2,3,4,5,6,7,8));


//----------------Rest operator--means takes any number of argumnets-----------------------------------------

let add = (...numbers) => {
    console.log("rest parameters", numbers);

    let sum = 0;

    numbers.forEach(function (number){
        sum +=number;
    });
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8));

let add= (...numbers) =>   numbers.reduce((sum, number) => sum +=number, 0);

//-----------------------------------------------------

function addStuff (x, y, ...z){
    return x+y * z.length
}

console.log(addStuff(1,2, "hello", "world", true, 99));

//------Spread Operator----------------------------------------------

let random = ["hello", "world", true, 99]
let newArray = [1,2, ...random, 3]

console.log(newArray);  //[ 1, 2, 'hello', 'world', true, 99, 3 ]
//rest always in argumnets nut spread is used in functions
//spread takes the values in specific orders


//--------------------------------------------------------------
let spreadEx = (item) => {
let spreadArray = [...item]
console.log(spreadArray);
return spreadArray
}
spreadEx("Hello World")   //["h","e","l"]
//-------------------------------------------------------------

let restEx = (...z) => {
    console.log(z)
    return z
}

restEx ("hello", "World") // ["hello", "World"]

//---------------------------------------------------------

var students = ["Julian", "AJ", "Matt"];
var x = students[0];
var y = students[1];
var z = students[2];

console.log(x,y,z);
                       
let students = ["Julian", "AJ", "Matt"];
let [x,y,z] = students;

let[x, ,z] = students

let[x, ...rest] = students;
                                                                     
console.log(x, rest);// juian ["AJ", "Matt"]

//--------------------------------------------
let completedHomework = ()=> {
   return ["Julian", "AJ", "Matt"]
}

let [x,y,z] = completedHomework();
console.log(x,y,z);

//------------also works with objects-----------------------------------------

let instructor = {
    name: "Jimmy",
    email: "nano.com"
}
let {name: x, email: y} = instructor;
console.log(x);

//-------------restructing the arguments-------------------------------------
let car = {
    make: "Honda",
}

function something({make, year = 2001}) {
 console.log(make,  year);
}

something(car);
//-----------------constructos ( are always capitalized)----------------------------------------------------

function Person (name, job) {
    this.name = name;
    this.job = job;
}

Person.prototype.getName =  function getName() {
    return this.name;
}

var goodGuy = new Person( " Anmg", "Airbender");
console.log(goodGuy.getName());

//-----------------------------------------
class Person{
    constructor (name, job) {
        this.name = name;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getJob(){
        return this.job;
    }
}

let goodGuy = new Person ('Neo',  'the one');
console.log(goodGuy);
//--------------------------------------------------------
//--------in ES6----------------------------------

class SuperHero extends Person {
    constructor (name, heroName, superPower){
        super(name);
        this.heroName = heroName;
        this.superPower = superPower;
    }
    secretIdentity(){
        return (`${this.heroName} is ${this.name} !!`)
    }
}

let batman = new SuperHero("Bruce wyne", "in Batman")
console.log(batman.secretIdentity())

//------------------------------------------------------------

class Person {
    constructor (name){
        this.name = name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name
    }
}

let goodGuy = new Person ('Jim Gordon');
console.log(goodGuy.name);
// Jim Gordomon pretend it's spelled right
goodGuy.name = "James Gordon";
console.log(goodGuy.name)

//----------------------------------------------
let student = {name: "A-aron"};
let status = new Map();

//setting the map with keys and values
status.set(student.name, "A-aron");
status.set("feeling", "churlish"); 

console.log(status.get(student.name));
console.log(status.get("feeling"))

//-----------------------------------------------

const Guy = (function(){
    const _name = new WeakMap();

class Guy {
    constructor (name){
        this[_name] = name;
    }
    set name(name) {
        this[_name] = name;
    }
    get name() {
        return this[_name];
    }

}    return Guy;

}());

let guy = new Guy("Fieri");
console.log(guy.name);