import React from 'react';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
   
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match ")
        }
        
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        console.log("Printing account data:");
        console.log(accountData);

        navigate("/dashboard");
    }

  return (
    <div>
        {/* student-instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>

        {/* First name and lastName */}
            <div>
                <label>
                    <p>first Name<sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstname'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstname}
                  />
                </label>

                <label>
                    <p>last Name<sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastname'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastname}
                    />
                </label>
            </div>

        {/* email Add */}
            <label>

                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    value={formData.email}
                />

            </label>

            {/* createPassword and Confirm Password */}
            <div>

                <label>
                    
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                    />

                    <span onClick={ () => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                    </span>

                </label>

            </div>

            {/* Confirm Password */}

            <div>

                <label>
                    
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Passwor'
                        value={formData.confirmPassword}
                    />

                    <span onClick={ () => ((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                    </span>

                </label>

            </div>

            <button>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm