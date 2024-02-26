const countValue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countValue.innerText);// string value to int
    value = value + 1; // update the value
    countValue.innerText = value; // set the value onto UI
}


const decrement = () => {
    let value = parseInt(countValue.innerText);// string value to int
    value = value - 1; // update the value
    countValue.innerText = value; // set the value onto UI
}