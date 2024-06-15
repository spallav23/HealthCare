import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Doctorsignup = () => {
 
  const navigate = useNavigate()
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [phone, setphone] = useState()
  const [Specializatio, setSpecializatio] = useState()
  const [Experience, setExperience] = useState()
  const [bio, setbio] = useState()
  function senddata() {
    console.log(name, email, password);

    axios.post('http://localhost:3001/register', {
      type: 'doctor',
      name: name,
      email: email,
      password: password,
      phone:phone,
      Specialization:Specializatio,
      Experience:Experience,
      bio:bio

    }).then((response) => {
      console.log(response.status)
      if (response.status == 202) {
        navigate('/doctordashboard');
      }
      else {
        alert(response.data);
      }


    })
  }

  return (
    <div className='bg-gray-100'>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Doctor Registration</h2>
          <form >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" value={name} onChange={(e) => setname(e.target.value)} id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" value={email} onChange={(e) => setemail(e.target.value)} id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required  />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" value={phone} onChange={(e) => setphone(e.target.value)} id="phone" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"  />
            </div>
            <div className="mb-4">
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
              <input type="text" value={Specializatio} onChange={(e) => setSpecializatio(e.target.value)} id="specialization" name="specialization" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"  />
            </div>
            <div className="mb-4">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input type="number" value={Experience} onChange={(e) => setExperience(e.target.value)} id="experience" name="experience" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"  />
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Short Bio</label>
              <textarea id="bio" value={bio} onChange={(e) => setbio(e.target.value)} name="bio" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button type="button" onClick={senddata} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register</button>
            </div>
          </form>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <NavLink to="/doctorlogin" className=" list hover:text-red-500" >Log in Here </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctorsignup
