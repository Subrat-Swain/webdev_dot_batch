// window :- Global Object includes DOM & BOM

// DOM:- Document Object Model :- html page converts into js object called DOM

// BOM:- Browser Object Model:- it allows js to talk to browser about matters
                        // otherthan content of page.

// window.console.log('subrat');

// console.log(document);


//-------------------------------------------------Access--------------------------------

// id:-

// let individ = document.getElementById('divi'); // return a single obect;

// console.log(individ);

// class:-

// let divc = document.getElementsByClassName('divClass'); // Return A HTML Collection Of elements; not objects/array
// console.log(divc);

// TagName:-

// let para = document.getElementsByTagName('p'); // This also returns a html colletction of p elements; Not objects/array
// console.log(para);

//------------------querySelector()-----------------------
// id:- 
// let idd = document.querySelector('#divi');
// console.log(idd);

// class:-
// let divc = document.getElementsByClassName('divClass'); // returns html collection
// console.log(divc);

// TagName:- 
// let tagele = document.querySelector('p'); // returns html collection
// console.log(tagele);


//---------------------------------------Updating Existing Content--------------------------

/*
        There are 4 Ways to Updating existing content

        1. .innerHtml
        2. .outerHtml
        3. .textContent
        4. .innerText
*/

// .innerHtml               //It provides inside of that element
// let divcla = document.querySelector('.divClass');

// let inner = divcla.innerHtml;

// console.log(inner);


// .outerHtml               // it provides current element also
// let dvi = document.querySelector('#divi');
// let outer = dvi.outerHTML;
// console.log(outer);


//.textContent                  // It Provides Text Contenet Only
// let dvi = document.querySelector('#divi');
// let tc = dvi.textContent;
// console.log(tc);

//.innerText                    //It Provides Text content but doesn't show hidden element ie. display:none/hidden;
// let divi = document.querySelector('#divi');
// let in = divi.innerText                                //try on browser not here for Better Understanding


//----------------------------------------Adding New Element/Content-------------------------------------------------------
// .createElement              with                     appendChild()               // Add At The End