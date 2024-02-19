console.log('Hello Jee');

// let lastName = 'Babbar';


// let firstName = new String('Love');

// let message = 
// `Hello ${lastName},
// Thanks for the Oppertunity

// Regards,
// Subrat`;

// console.log(message);


//----------------------- Date & Time-----------------------
// let date = new Date();

// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(1998, 11, 20, 7);

// date3.setFullYear(2025);

// console.log(date);
// console.log(date2);
// console.log(date3);


//-------------------------Array-------------------------------------

//-------------------------Primitives----------------------
// let numbers = [1,4,5,7];

// console.log(numbers);

//end -> push
// begininging -> unshift
// middle -> splice

//console.log(numbers);

// console.log(numbers.indexOf((5)));
// console.log(numbers.indexOf((9))); // gives -1 if there is no such element

// We want to check if a number exist in an array 

// if(numbers.indexOf(10) != -1)
//     console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4,2));


//------------------References------------------------

// let courses = [
//     {no:1, naam:'subrat'},
//     {no:2, naam:'Babbar'}
// ];

// console.log(courses);

// console.log(courses.indexOf({no:1, naam:'subrat'}));
// console.log(courses.includes({no:1, naam:'subrat'}));


// let course = courses.find(function(course){
//     return course.naam == 'subrat';
// })

// console.log(course);

// let course = courses.find(course => course.naam === 'subrat');

// console.log(course);

//---------------------Removing Element-----------------------

// let numbers = [1,2,3,4,5,6,7];

// numbers.pop();//end

// console.log(numbers);

// numbers.shift(); // start / beginning
// console.log(numbers); 

// numbers.splice(3,1); // Middle
// console.log(numbers);

//--------------------Emptying An Array---------------------

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];

// console.log(numbers);
// console.log(numbers2);

// numbers.length = 0;
// console.log(numbers);

// numbers.splice(0,numbers.length);
// console.log(numbers);

//----------------Combining & Slice Arrays------------------------

// let first = [1,2,3];

// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// console.log(combined.slice(2,3));

//--------------spread Operator-----------------

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,...second];
// console.log(combined); 
// let combined2 = [...first,'a',...second,'b',false];
// console.log(combined2); 

// //copy
// let another = [...combined];


//----------------Iterating an Array-------------------

//for-of loop
// let arr = [10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(numbers => console.log(numbers));

// arr.forEach(function(numbers){
//     console.log(numbers)
// })


//-----------------Joining & Split An Array---------------------

// JOin:-
// let numbers = [10, 20, 30, 40, 50];
// const joined = numbers.join(',');
// console.log(joined);

//split:-
// let message = 'This is my first message';

// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');

// console.log(joined);

//-----------------Sorting An Array------------------------------

// let numbers = [40,30,10,20];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);


//---------------------Filtering An Array------------------------

// let numbers = [1,2,-1,-4];

// let filtered = numbers.filter(value => value >= 0);

// console.log(filtered);


//--------------------Mapping Arrays-------------------------------

// let numbers = [7,8,9,10];

// let items = numbers.map(value => 'student_no' + value);

// console.log(items);

//--------------------Mapping With Objects------------------------
let numbers = [1, 2, -6, -9];

let items = numbers.filter(value => value >= 0).map(num => {value: num});

console.log(items);