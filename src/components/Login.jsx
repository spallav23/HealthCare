import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate();
    const [password, setpassword] = useState()
    const [email, setemail] = useState()
    function senddata(){
        axios.post('http://localhost:3001/login',{
          type : 'user',
          email : email,
          password: password
        }).then((Response) =>{
          if(Response.status == 202){
            navigate('/');
        
            console.log("go to next page"); 
          }
          else{
            console.log("not valid");
            alert('email and password not match try again')
          }
    
    
        })
    
    }

    

  return (
    <div>
      <main>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="src/assets/img/stethoscope-icon-stethoscope-icon-2316460.png"
                    alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                    account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email
                            address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required value={email} onChange={(e)=>setemail(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" value={password}
                                required onChange={(e)=>setpassword(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                  

                            <button type="button" onClick={senddata}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <NavLink to="/registor"  className=" list hover:text-red-500" > Sign Up Here </NavLink>
                </p>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Login
