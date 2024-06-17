import React, { useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Doctorlogin = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  
  function senddata() {
    axios.post(import.meta.env.VITE_SERVER_URL+'/login', {
      type: 'doctor',
      email: email,
      password: password
    }).then((Response) => {
      if (Response.status == 202) {
        navigate('/doctordashboard')
        console.log("go to next page");
      }
      else {
        console.log("not valid");
        alert('email and password not match try again')
      }


    })

  }
  return (
    <div className='bg-gray-100'>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto bg-white p-8 py-20 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Doctor Registration</h2>
          <form className='pt-14 pb-24'>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={email} onChange={(e) => setemail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required value={password} onChange={(e) => setpassword(e.target.value)} />
            </div>




            <div className="flex items-center justify-between">
              <button type="button" onClick={senddata} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register</button>
            </div>
          </form>
          <div className="text-grey-dark mt-6">
            Don't have an account?
            <NavLink to="/doctorsignup" className=" list hover:text-red-500" >sign up Here </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Doctorlogin
