// setTimeout(function(){
//     console.log('third');
// },3000)

// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

//-------------------------Promises--------------------------------------

// let meraPromise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('I am inside Promise1');
//     }, 5000);
//     // return 2;
//     // resolve(1998);
//     reject (new Error('Bhaisahab error aye hai'));
// })

// meraPromise.then((value) => {console.log(value)}, (error) => {console.log('Recieved an Error')});

// // meraPromise.catch((error) => {console.log('Recieved an Error')});


// // let meraPromise2 = new Promise(function(resolve, reject) {
// //     setTimeout(function(){
// //         console.log('I am inside Promise2');
// //     }, 3000);
// // })

// console.log('Pehla');


//----------------------Promise Chaining-------------------------------

// let waadaa1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     }, 2000);
//     resolve(true);
// })


// waadaa1.then(() =>{
//     let waadaa2 = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// }).then((value) => console.log(value));


//--------------------Async function--------------------------------------

// async function abcd(){
//     return 7;
// }


//--------------------async-await----------------------------------------
// async function utility() 
//     {

//         let delhiMausam = new Promise(function(resolve, reject){
//             setTimeout(() => {
//                 resolve("Delhi me bhot garmi hai");
//             },1000);
//         });
    
//         let hydMausam = new Promise(function(resolve, reject){
//             setTimeout(() => {
//                 resolve("Hyderabad is Cool");
//             },5000);
//         });

//         let dM = await delhiMausam;
//         let hM = await hydMausam;

//         return [dM, hM];
//     }


//------------------------------Fetch API------------------------------

// let obj = {
//     heading:"head"
// }
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
// }

// utility();


//-----------------------------POST-----------------------------------

// async function helper() {
//     let options = {
//         method:'POST',
//         body:JSON.stringify({
//             title: 'Subrat',
//             body: 'Tagdi Body',
//             userId: 1993,
//             weight: 90,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();


//----------------------------------closures-------------------------
// Global Scope / Local Scope

function init() {
    let name = "Mozilla"; // name is a local variable crated by init
    function displayName(){
        // displayName() is the inner function, that form the closure
        console.log(name);// use variable declared in the parent function
    }
    return displayName();
}

let func1 = init();

func1();


