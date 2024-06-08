import React, { useEffect, useState } from 'react';
import "./User.css"
import axios from "axios"
import { Link } from 'react-router-dom';

const User = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=await axios.get("http://localhost:8000/api/users")
                setUser(response.data)
            } catch (error) {
                console.log("error while fetching data");
            }
        }
        fetchData()
    },[])
  return (
    <div className='userTable'>
        <Link to="/add" type="button" className="btn btn-primary">Add New Customer <i class="fa-solid fa-user-plus"></i> </Link>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>S.NO.</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>LastName</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Phone No.</th>
                    <th scope='col'>Details</th>
                    <th scope='col'>Actions</th>
                    </tr>
            </thead>

            <tbody>
                {user.map((user,index)=>{
                  return (
<tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>{user.Details}</td>

                    <td className='actionButton'>
                        <button type="button" className="btn btn-info">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </button>

                         <button type="button" className="btn btn-danger">
                            <i class="fa-solid fa-trash"></i>
                            </button>
                     </td>
                </tr>
                  )
                })}
                
            </tbody>
        </table>
    </div>
  )
}

export default User