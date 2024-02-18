console.log('chaliye shuru karte hai');

// object create


//1.factory function:-

// function createRectangle(len, bre){
//     return rectangle = {
//         // length: length,
//         // breadth: breadth,
//         length: len,
//         breadth: bre,
    
//         draw: function() {
//             console.log('drawing rectangle.....');
//         }
//     };
//     // return rectangle;
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangleObj2 = createRectangle(2,3);
// let rectangleObj3 = createRectangle(7,9);
// Access
// rectangle.length;
// rectangle.breadth;
// rectangle.draw();

// 2. Constructor Function:-
//      Pascal Notation -> First Letter Of Every Word Is Capital -> NumberOfStudent
//      Constructor function -> prop/methods -> initialise/Define
function Rectangle(len, bre){
    this.length = len,
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}

// Object Creation using constructor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';

// delete rectangleObject.color;
// console.log(rectangleObject);

let Rectangle1 = new Function(
    'length','breadth',
    `this.length = length,
    this.breadth = breadth;
    this.draw = function(){
        console.log('drawing');
    }`
);

//Object creation using Rectangle1
let rect = new Rectangle1(2,3);
console.log(rect);



// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = {value : 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value); 

// let a = 10;

// function inc(a){
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10};

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

let rectangle = {
    length: 2,
    breadth: 4
};

//for-in loop
// for(let key in rectangle){
    //keys are reflected through key variable
    //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop on Objects:- Hack
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }

// Object - Clone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

// Object - Clone #2

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = {value:25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);



// Object - Clone #3
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);