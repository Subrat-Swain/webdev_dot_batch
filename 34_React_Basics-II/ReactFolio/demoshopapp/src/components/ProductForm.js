import { useState } from 'react';
import './ProductForm.css';


function ProductForm(props){

    // handle parameters using objects
    // const [fullProductInput, setfullProductInput] = useState({
    //     title: '',
    //     date: ''
    // });

    // function setfullProductInput(event, prevState) {
    //     // return object with updated parameters
    //     return {...prevState, title:event.target.value}
    // }

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    
    function titleChangeHandler(event){
        // let obj = {...prevState, title:event.target.value};
        // console.log(obj);
        // return obj;
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);


        // setTitle don't update immediately
        // console.log(date);
    }
    
    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        };

        // console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className="new-product_control">
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-product_control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date' value={newDate} min='2024-01-01' max='2024-12-12'></input>
                </div>
                <div className="new-product_button">
                    <button type='submit'>Add Product</button>
                </div>
            </div>
        </form>
    );
}

export default ProductForm