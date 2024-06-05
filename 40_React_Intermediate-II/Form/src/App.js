import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"", 
    comments:false, candidates:false, offers:false, pushNotification:""
  })

  function changeHandler (event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked :value}));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally Printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">

      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">FirstName</label>
        <br/>
        <input
          type= "text"
          name="firstName"
          placeholder="Subrat"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br/>

        <label htmlFor="lastName">LastName</label>
        <br/>
        <input
          type= "text"
          name="lastName"
          placeholder="Swain"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br/>

        <label htmlFor="email">Email Address</label>
        <br/>
        <input
          type= "email"
          name="email"
          placeholder="subr@gmail.com"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br/>

        <label htmlFor="country">Country</label>
        <br/>
        <select id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
          >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br/>

        <label htmlFor="streetAddress">Street Address</label>
        <br/>
        <input
          type= "text"
          name="streetAddress"
          placeholder="B-25C"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <br/>

        <label htmlFor="city">City Name</label>
        <br/>
        <input
          type= "text"
          name="city"
          placeholder="Bhubaneswar"
          id="city"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />
        
        <br/>

        <label htmlFor="state">State</label>
        <br/>
        <input
          type= "text"
          name="state"
          placeholder="Odisha"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />

        <br/>

        <label htmlFor="postalCode">Postal Code</label>
        <br/>
        <input
          type= "text"
          name="postalCode"
          placeholder="754150"
          id="postalCode"
          checked={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <br/>

        <fieldset>

          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              type="checkbox"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>

          </div>

          <div className="flex">
            <input
              id="candidates"
              type="checkbox"
              name="candidates"
              value={formData.candidates}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>

          </div>

          <div className="flex">
            <input
              id="offers"
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accept or reject an offer.</p>
            </div>

          </div>
          
        </fieldset>

        <br/>

        <fieldset>

            <legend>Push Notification</legend>
            <p>These are delivered via SMS to your mobile phone.</p>

            <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
            />

            <label htmlFor="pushEmail">Everything</label>

            <br/>

            <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Same as email"
              onChange={changeHandler}
            />

            <label htmlFor="pushEmail">Same as email</label>

            <br/>

            <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="No Push Notification"
              onChange={changeHandler}
            />

            <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>

      </form>

    </div>
  )
}

export default App;
