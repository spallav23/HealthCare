import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
const Singup = () => {
    const navigate = useNavigate();
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    function senddata(){
            console.log(name,email,password);
            axios.post('http://localhost:3001/register',{
                type:'user',
                name:name,
                email:email,
                password:password
            }).then((e)=>{
                console.log(e.status)
                if(e.status == 202){
                    navigate('/');
                }
                else{
                    alert(e.data);
                }

            
            })
    }

  return (

    <div>
        <main>
    <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
               <form >
                <input 
                    id="name"
                    type="text" value={name} onChange={(e)=>setname(e.target.value)}
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full Name"  required/>

                <input 
                    id="email" value={email} onChange={(e)=>setemail(e.target.value)}
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" required />

                <input 
                    id="password"
                    type="password" value={password} onChange={(e)=>setpassword(e.target.value)}
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" required />
             
                    <button type="button" onClick={senddata} 
                    className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
            </form>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and 
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div className="text-grey-dark mt-6">
                Already have an account? 
                <NavLink to="/login"  className=" list hover:text-red-500" >Log in Here </NavLink>
            </div>
        </div>
    </div>
  </main>
    </div>
  )
}

export default Singup
