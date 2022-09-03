
// //1. Introduction to ts-
// // created by microsoft to address shortcomings of js -- brother /sister of js - ts comes with discipline
// // every js file is valid ts file
// // ts - dynamically typed - can change data type of variable declared if not annoted explicitly
// // ts - js with type checking

// //drawbacks -- compilation - for browser identification - transpilation needed to convert ts in to js for browser recongnization purpose and run file properply/
// // need more discipline in coding
// // for simple - js - medium to large -ts
 
// // installation - npm i -g typescript -- linux sudo added before - super user do.
// //version check  - tsc -v
// //extension = .ts

// // first program --
// // for transpilation - tsv index.ts - index.js file created automatically after command execution

console.log("hello-world!");

// //age variable annotated with number data type
let age : number = 20; // let will be converted to var in js file as typescript used ES5 version of js 
// age = 'a'; // error - Type 'string' is not assignable to type 'number'
// // like above , we can catch our mistakes in compile time while writing the code



// // configure typescript compiler - tsconfig file creation - tsc --init
// // tsc create dist folder - with index.js in it. now tsc and file not needed.


// //debugging ts apps - tsconfig.json on then write tsc in command - index.js.map file created in dist folder

// // program --

if(age<50) 
age+= 10;

console.log(age);


// //fundamentals

let sales:number = 123; //annotating syntax

// if dont annotate - ts automatically detects var data types

// let sales = 123_456; // number
// let course = "Typescript"; //string
// let is_published = true ; //boolean

// // any type
// let level;
// level = 1;
// level = 'a'; 
// // as we use ts for type checking so avoid using any type


// function render(document:any){ // if we dont declare type to arg in fucntion - it will implicitly taken as 'any'
//     console.log(document);
// }


//  //arrays

 let numbers = [1,2,3,'4']; // dynamic arrays - elenment can be of different types

//  //annotation

 let num : number[] = [1,2,4]; // number array

//  //tuples

 let tup1: [number,string] = [1,'sid']; // ore data types can be added but recommended for 2 values like key:value pairs
//  tup1[0]. // methods of number object
//  tup1[1]. // methods of string object

 
// //enums - prestents list of related constants

// //eg size of tshirt
// // const small = 1;
// // const medium = 2;
// // const large = 3;

// //compiling in enum - PascalCase is used in enums
// enum Size { Small = 1,Medium,Large}; // by default first value = 0 , here it is Small or can be explicitly assigned 0 or 1 etc 
// // if string is used like --> Small = 's' then both other values Medium and Large has to be explicitly assigned values of string

// let mySize : Size = Size.Medium;
// console.log(mySize); // 1 ans because by default Small = 0
// // if Small = 1 explicitly assigned then ans = 2

// //first tsc cmd to transpile then node dist/indx.js to run index.js file

// if enum is defined with cont then index.js file code compiled is more optimized and readable unlike earlier

const enum Size { Small = 1,Medium,Large};
let mySize : Size = Size.Medium;

console.log(mySize);


//functions

// function calculateTax(income : number) : number{ // void here is annotated type for return in code 
//     // return ; // when void is used as annotation above
//     return 0; //when number is used as annotation above in function

// }

function calculateTax(income:number , taxYear:number) :  number{
    if(taxYear<2022){
        return income * 1.2; // in iof stmt
    } 
    return income * 1.3; //return of fucntion otehr number annotation will create error
}

//calling function

calculateTax(10000,2022);// will take exactly 2 args not 3 like js-- error occurs - Expected 2 arguments, but got 3.
	

//objects

// let employee = {id:1};
// employee.name = "sid"; // error = Property 'name' does not exist on type '{ id: number; }'.

//using annotation
// let employee : { // Property 'name' is missing in type '{ id: number; }' but required in type '{ id: number; name: string; }'.
//     readonly id:number,
//     name:string
// } = {id:1,name:"sid"}; // as name is not declared here with value -- sue of name? can be done or value can be assigend explicitly
// but ? mark shoudl be used with proeprty that are optional -- name is not optional in so we dont use ? here and assign a value

//readonly -- some proeprties are made readoly so they cant be changed later on.
// employee.id = 0 ; till id above in function is written without readonly property use.a also prevents accidental change of value


//advance use of ts

// Type aliases - mofifying above employee object -- dont repeat code - use

type Employee = {
    readonly id:number;
    name:string,
    retire:(date:Date)=>void
}

let employee:Employee = {
    id:1,
    name:'sid',
    retire: (date:Date)=>{
        console.log(date); 
    }
}

// now no need to declare fields again and again, directly create employee object with diff values

// Union Types -- can give function / var more then 1 data type

function kgToLbs(weight : number | string) :  number{
    // narrowing down
    if(typeof weight === 'number'){
        return weight *2.0;
    }else{
        return parseInt(weight) * 2.5;
    }
}

//both below are valid as function can be any of the types declared above
kgToLbs(10);
kgToLbs('10kgs');


// intersection types -- using & operator

// let weight : number & string; // can be any or both at the same time

 // optional chaining -- ? -> optional operator


type Customer = {
    // birthday: Date

    //making birthday optional
    birthday?:Date
};

function getCustomer(id:number):Customer | null | undefined{
    return id === 0 ? null :{birthday:new Date};
}

// let customer = getCustomer(0); // ans = undefined
// if(customer !==null && customer !== undefined){ // either of this full stmt - Optional property access operator can be used

// console.log(customer.birthday);  

let customer = getCustomer(1); // ans = 2022-09-03T17:19:31.120Z <-- date
// console.log(customer?.birthday);   // ? operator used  // output = undefined if - let customer = getCustomer(0);

console.log(customer?.birthday?.getFullYear());   // if ? not used with biortdhay here - error- Object is possibly 'undefined'.
// output - 2022

//optional element access operator
// customer?.[0]

// optional call

let log: any = null;
// log('a'); //error - Identifier expected.
log?.('a'); // no error no output
