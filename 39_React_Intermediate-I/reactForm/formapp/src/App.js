
import './App.css';
import { useState } from "react";

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // // Anything we write values are updated simultaneously
  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event) {
  //   // console.log("Printing First Name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("Printing Last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState( {firstName: "", lastName: "", email: "", comments:"", 
    isVisible:false, mode:"", favCar:""});

  // console.log(formData.email);
  console.log(formData);

  function changeHandler(event) {
    const {name, value, checked, type, } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event) {
      event.preventDefault();
      //Print
      console.log("Finally printing the entire form Data")
      console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <br/>
        <br></br>

        <input
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />

        <br/>
        <br></br>

        <input
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <br/>
        <br></br>
        
        <input
          type='email'
          placeholder='Enter Your email here'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br/>
        <br></br>

        <textarea placeholder='Enter Your Comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br/>
        <br></br>

        <input type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id="isVisible"
          checked={formData.isVisible}
          />
          <label htmlFor='isVisible'>Am I Visible ?</label>
          {/* Attaching with id using htmlfor attribute click can be done by clicking text also:-attaching label*/}

        <br/>
        <br></br>

        <fieldset>
            <legend>Mode:</legend>
            <input type='radio'
              onChange={changeHandler}
              name='mode'
              value="Online-Mode"
              id='Online-Mode'
              checked={formData.mode === "Online-Mode"}
            />
          <label htmlFor='Online-Mode'>Online Mode</label>

          <input type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline-Mode"
            id='Offline-Mode'
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor='Online-Mode'>Offline Mode</label>

        </fieldset>

        <label htmlFor='favCar'>Tell Me Your Favourite Card</label>
        <select 
          onChange={changeHandler}
          name='favCar'
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="defender">Defender</option>

        </select>

        {/* <input type='submit' value='submit'/> */}


        <br/>
        <br></br>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
