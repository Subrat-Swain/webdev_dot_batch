console.log('Hello Jee');
//---------------------Function----------------------


//Function Call:- Hoisting(automatically by js engine)
// run(); // can be call from top or before declaration


// //Function Declaration
// function run(){
//     console.log('Running');
// }

//Function Call
// run();

//--------------------Function Assignment---------------------

//can't call due to functioin assignment hoisting not working
// stand();

//----------Named function assignment-----

// let stand = function walk(){
//     console.log('walking');
// }

//---------Anonymous function assignment------

// let stand2 = function(){
//     console.log('walking');
// }


// walk(); // not exist

// stand();

// let jump = stand; // It can assign 

// jump();

// stand2();


//---------------------Dynamic Nature Of function-----------------
// let x = 1;
// x = 'a';

// console.log(x);
//------------argument object-------------------
// function sum(){
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// };

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);


//--------------------Rest Operator-----------------------------------

// function sum(num,value, ...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


//----------------Default Parameters---------------------------------

// function interest(p,r=6,y=10){
//     return p*r*y/100;
// }

// console.log(interest(1000, 10, 5));
// console.log(interest(1000));


//---------------------Getters and Setters--------------------------

//getter -> access properties
//setter -> change or mutate properties
// let person = {
//     fName:'subrat',
//     lName:'swain',
//     get fullName(){
//         return `${person.fName}      ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value != String){
//             throw new Error("You have not sent a String");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// //getter --- read only
// function fullName(){
//     return `${person.fName}      ${person.lName}`
// }

// console.log(fullName());

// console.log(person.fullName);
// person.fullName = 'Rahul Kumar';
// console.log(person.fullName);

//------------Error Handling Try & Catch------------

// try{
//     // person.fullName = 1;
//     // person.fullName = true;
//     person.fullName = 'Rahul Kumar';
// }
// catch(e){
//     // alert('you have sent a number in fullName');
//     alert(e);
// }


//--------------------------------Scope----------------------------------

// {
//     // let a = 5; // a is alive inside the block

//     var a = 5; // global scoped
// }
// // console.log(a);// a is not defined as a is block scoped

// console.log(a); // Here we can access as a is global scoped


// function walk(){
//     var a = 5;
// }
// console.log(a);
//--------------for loop var scope-------------------
// for(var i = 0; i< 10; i++){

// }
// console.log(i);

// function a(){
//     const ab = 5;
// }
// const ab = 5;
// function b(){
//     const ab = 5;
// }


//--------------------------Reducing An Array-----------------------

let arr = [-1, -2, -3, -4];

// let total = 0;

// for(let value of arr)
//     total = total + value;
// console.log(arr);


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("PRINTING TOTAL SUM:");
console.log(totalSum);
