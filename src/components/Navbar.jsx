import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  axios.get('http://localhost:3001/').then((e) => {
      if (e.data.valid) {
        document.getElementById('login').innerHTML = e.data.name;
      }
    })

  function logclick(){
    axios.get('http://localhost:3001/').then((e) => {
      if (e.data.valid) {
        const yn = confirm("do you want to log out ?");
        if (yn) {
          axios.post('http://localhost:3001/').then((e) => {
            console.log(e.data);
            document.getElementById('login').innerHTML = 'Log in';
            navigate('/');
          })
        }
      }
      else {
  
        navigate('/login');
      
    }
    })
  }
  function hendleclick() {
    axios.get('http://localhost:3001/').then((e) => {
      if (e.data.doctor) {
        console.log("doctor");
        navigate('/doctordashboard')
      }
      else {
        console.log("not");
        navigate('/doctorlogin')
      }
    })

  }

  return (
    <div>
      <header >
        <nav className="flex p-2 bg-slate-700 text-gray-300 justify-around items-center flex-col  lg:flex-row m-0">
          <img className="logo " src="src/assets/img/stethoscope-icon-stethoscope-icon-2316460.png" width={40} alt="" />

          <ul className="flex list-none gap-10 flex-col lg:flex-row">
            <li><NavLink to="/" className=" list hover:text-red-500 text-red-500" style={({ isActive }) => ({ color: isActive ? "red" : "white", })}>Home </NavLink></li>
            <li><NavLink to="/bodycheck" className=" list hover:text-red-500" style={({ isActive }) => ({ color: isActive ? "red" : "white", })}>Booked Test </NavLink></li>
            <li><NavLink to="/labtest" className=" list hover:text-red-500" style={({ isActive }) => ({ color: isActive ? "red" : "white", })}>Lab Checks </NavLink></li>
            <li><NavLink to="/Consult" className=" list hover:text-red-500" style={({ isActive }) => ({ color: isActive ? "red" : "white", })}>Online Consult </NavLink></li>
            <li><NavLink to="/contect" className=" list hover:text-red-500" style={({ isActive }) => ({ color: isActive ? "red" : "white", })}>Contact Us </NavLink></li>
          </ul>
          <button id='login' onClick={logclick} className="border-green-600 border-2 px-5  bg-green-600 rounded-lg hover:bg-transparent hover:animate-pulse" >Log
            In </button>
         
          <button onClick={hendleclick} className="border-red-600 border-2 px-5  bg-red-600 rounded-lg hover:bg-transparent hover:animate-pulse">doctor
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
