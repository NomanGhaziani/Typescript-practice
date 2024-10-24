function outsidefunction(){
    const insidefunction = function (){
        console.log("Hello nested function")
    }
     insidefunction();
}
outsidefunction();

function userInfo(callback : any){
    let name = "SIR KAMRAN";
    callback(name);
}
userInfo(function(name : string){
    console.log("Hello ," + name);
});
//..............strongly type..................................
let a2 : string = "pakistan";
let b2 : number = 786;
let c2 : boolean = true
//..................//type inference..............................
let a1 = "pakistan"
let b1 = 786
let c1 = true
//..................const //...let......var.........
let rollno1 = 4100;

console.log(rollno1)

//.............function overloading..........
function nameOver (a: string ,b : string) : string;
function nameOver (a: number ,b : number) : number;
function nameOver (a : any , b : any):any  {
    return a ; 
};
console.log(nameOver("123", "456"))
//....................union literal ..............
let input : string | number
input = "noman";
console.log(input);

//.................Intersection.............
type student9 = {
    name : string,
    age : number
};
type teacher = {
    name : string,
    age : number,
    exp : number
};
type special = student9 & teacher;

let sir : special = {
    name : "ali",
    age : 26,
    exp : 2
}
console.log(sir);

//..............enum..................

enum roles {
    admin, normalUser
}
type loginInfo ={
    username : string,
    password : string,
    role : roles,
}
let user1 : loginInfo ={
    username : "noman",
password : "12345",
role : roles.normalUser
};
let user2 : loginInfo = {
    username : "ali",
    password : "87654",
    role : roles.admin
};
console.log(user1)
console.log(user2)

enum color {green1 , yello1 , blue1};
console.log(color)
//................type aliases,,,,,,,,,,,,,,,,,,,,,,,,
type IPerson ={
    name : string,
    age : number,
    city : string
};
let person1 : IPerson= {
    name : "saba",
    age: 31,
    city : "karachi"
};
let person2 : IPerson={
    name : "noor",
    age: 26,
    city : "lahore"
}
console.log(person1,person2)


//..................Stale Object.................

person1 = person2

//............simple function.................
function print (){
    console.log("hello world")
}
print();
function print1(){
    return "welcome"
}
console.log(print1())
//use parameter
function add (user5 : number, user6 : number){
    let val1 : number = user5;
    let val2 : number = user6;
    let sum : number = val1 + val2;
    console.log(sum);
}
add(10,20);



//...........Explicit casting..............
let name3 = "noman"
//....................narrowing.........
if(typeof(name3) == "string"){
      "string";
    let result = name3.toUpperCase()
}else{
    console.log("any")}

console.log((name3 as string).toUpperCase());


let age : number = 19
if (age > 20){
    console.log("enter")
}
else {
    console.log("out")
};

function biryani (){
    if(biryani == biryani){
        console.log("biryani coming")
    }
    else{
        console.log("pulaoo coming")
    }
}
biryani();
let fruit : string[]= ["apple", "banana","mango","graps" ]
console.log(fruit)

let num : number = 6
for(let i = 1; i <= 10; i++){
console.log(`${num } * ${i} = ${num * i}`);
}
let num3 : number[] = [91,92,93,94,95,96]
num3.push(97)
num3.pop()
num3.shift()
num3.unshift(81)
//num3.splice(1)
num3.slice(1,3)
console.log(num3)


let array = [1, 2, 3, 4, 5];
let splicedArray = array.splice(1, 2);

console.log(splicedArray);    // Output: [2, 3, 4]
console.log(8 / 2 )
console.log(6 - 2 )
console.log(2 + 2 )
console.log(2 * 2 )

let student2 : string = "noman"
console.log(student2.toUpperCase())
console.log(student2.toLowerCase())

let a = 2
let b = 3

console.log(a  && b)
console.log(a || b)

function customFind (arr : string[], element : string) : boolean | void{
    for (let i = 0; i <arr.length; i++){
        if(arr [i]=== element){
            return true;
        }
    }
}
setTimeout (function(){
    console.log("Hello, world!");
},20000);

import inquirer from "inquirer";









//let a = 5;
//a =10;
//console.log('a')
//let a = 'pakistan'
//a = 9
//console.log(a)
//const a = 5;
//a++;
//console.log(a)
//var a:number = "6";
//a = 9;
//console.log(a)


const enum Color {red2, green2, blue2}
//var colorName :string = Color[1];
console.log(color)

let notSure:any = 4;
notSure = "maybe a string instead";
notSure = false;


if (true) {
    let z = 4;
    //use z
}
else {
    let z = "string";
    //use z
}
console.log("let: " + z);
let myType = {name : "zia", id:1}//A
myType = {id:2 , name : "tom"} // B
myType = {name : "hell", id:3, gender:false}//c

var x:any = "Tom"; 
 if(typeof x === 'string'){ 
      console.log(x) 
}

x.unknown();// Line D
  const enum Color {red=1, green, blue}
var colorName :string = Color['2'];
console.log(colorName)
let x: {id: number, [name:string]:any}
let y = {id: 1, myName: "Zia"}

x = y
type callBackWithString = (string) => void; 

function usingCallBack(f:callBackWithString ){
    f("This is a string)
}
let c = ((a,b)=> ++a)(1,2)
console.log(c)
let x = 10
let y = '10'
console.log(x+y);
let result = 10>5 ? "small" : "large"
console.log(result);
enum color {red ,green, blue}
console.log(color)
let points =2
points++
console.log(points)

if(10<5){
    console.log("true")
}
else{
    console.log("false")
};

let a = 8
let b = 4
let num = (a + b) 
console.log(typeof num); 
let e = true
let f = false
console.log(e && f)
console.log( ! f)
console.log(e || f)

let h1: string = "hello world!";
 let h = 6;
console.log(h)

let name : [boolean, number ] = [true , 34]
console.log(name)
let  word : string[]= ["noman  attari"]//alternative correct syntex
console.log(word)
let student : string[]=["raza,ali,saba"];
console.log(student)

console.log ("start");
let username : string = "Noman";
console.log(username.concat("Ghaziani"));
let age : number = 26;
if(age < 26){
    console.log("welcome to office")
}
else{
    console.log("no entry")
}
let worker :any[] =["ali","raza","saba","sana"];
for(let value of worker){
    console.log(`${value} how are you`)
}

let array = [1,2,3]

console.log(array.concat(4,5,6,));

import { rejects } from "assert";
import { resolve } from "path";

//...............Promise("resolve";"reject")................
let promise = new Promise((resolve,reject)=>{
    resolve("success");
});

promise.then ((value)=>{
    console.log(value);
}
);




const myPromise = new Promise<number>((resolve, reject) => {
    const success = true; // Simulate a condition for success or failure
    if (success) {
      resolve(42); // On success, resolve the promise with a value
    } else {
      reject('An error occurred'); // On failure, reject the promise with an error message
    }
  });
  

let size : "small" | "medium" | "large" =
"medium"
console.log(size)









