import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios"
import './adduser.css';
import Navbar from '../navbar/Navbar';

const AddUser = () => {
    const users={
        name:"",
        lastname:"",
        address:"",
        phone:"",
        details:""
    }
    const [user,setUser]=useState(users);
    const navigate=useNavigate()

    const inputhandler=(e)=>{
        const {name,value}=e.target;
        console.log(name,value)
        setUser({...user,[name]:value});
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user",user)
        .then((response)=>{
           console.log("User Created Successfully");
           navigate("/")
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='addUser'>
            <Link to="/customer/records" type="button" className="btn btn-secondary">
            <i className="fa-solid fa-backward"></i> Back</Link>
            <h3>Add New User</h3>
            <form className="addUserForm" onSubmit={handleSubmit}>
                <div className='inputGroup'>
                    <label htmlFor="Name">Name:</label>
                    <input type="text" placeholder='Enter Name Here'
                     id='name'
                     name='name'
                     onChange={inputhandler}
                      autoComplete='off' />
                    </div>
                    <div className='inputGroup'>
                    <label htmlFor="lastName">lastName:</label>
                    <input type="text" placeholder='Enter LastName Here'
                     id='name'
                     name='lastname'
                     onChange={inputhandler}
                      autoComplete='off' />
                    </div>
                    <div className='inputGroup'>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id='address'
                    name='address'
                    onChange={inputhandler}
                     placeholder='Enter Address Here'
                      autoComplete='off' />
                    </div>

                    <div className='inputGroup'>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id='phone'
                     onChange={inputhandler}
                     name='phone'
                     placeholder='Enter Ph No Here' autoComplete='off' />
                </div>

                <div className='inputGroup'>
                    <label htmlFor="details">Details:</label>
                    <input type="text" id='details'
                    onChange={inputhandler}
                     name='details'
                      placeholder='Enter Customer Details' autoComplete='off' />
                </div>

                <div className='inputGroup'>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser