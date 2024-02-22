//---------------------------------Adding Event Listner----------------------------;

// document.addEventListener('click', function(){
//     console.log('I Clicked ON Document');
// })


// -------------------------------Remove Event Listner:---------------------------

// function print(){
//     console.log('Hy');
// }
// //remove will work when both add and removeeventlistner takes same function as input/parameter; 
// document.addEventListener('click', print);

// document.removeEventListener('click', print);


//-----------------------The Event Object--------------------------------

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// })


//-------------------------The Default Action------------------------------

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Maza aaya, achha laga');
// });


//------------------------Avoid Too Many Events---------------------

// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('Para ' + event.target.textContent);
// };

// myDiv.addEventListener('click', paraStatus);

// for(let i = 1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;
//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);


//-------------------target property of event-----------------

// It Will exectue for both paragraph and span;
// let element = document.querySelector('#wrapper');
// element.addEventListener('click', function(event){
//     console.log('span pr click kia hai' + event.target.textContent);
// });


// how to stop??
//----------------------------.nodeName Property-----------------
let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kia hai' + event.target.textContent);
    }
});