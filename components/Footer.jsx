import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
         <footer className="bg-red-600 w-full flex text-white p-5 flex-col lg:flex-row sticky bottom-0">
        <div className="w-4/12 pl-10">
            <div className="logo mx-20 my-5">
                <img src="src/assets/img/stethoscope-icon-stethoscope-icon-2316460.png" width={100} alt=""/>
            </div>
            <div className="content text-gray-300 text-sm  pr-40">
                <p>Copyright © 2024 Healthcare 24/7 at home | Powered by Healthcare 24/7 at home
                    Facebook</p>
            </div>
        </div>
        <div className="w-4/12">
            <h3 className="text-xl">Quck Links</h3>
            <ul className="text-sm mt-2 text-gray-300">
                <li><NavLink to="/"  className=" list hover:text-slate-500" >Home</NavLink></li>
                <li><NavLink to="/selfchack"  className=" list hover:text-slate-500" >Helth Tracker</NavLink></li>
                <li><NavLink to="/labtest"  className=" list hover:text-slate-500" >Lab Chack</NavLink></li>
                <li><NavLink to="/Consult"  className=" list hover:text-slate-500" >Online Consult</NavLink></li>
                <li><NavLink to="/contect"  className=" list hover:text-slate-500" >Contect Us</NavLink></li>
                <li><NavLink to="/login"  className=" list hover:text-slate-500" >Login</NavLink></li>
                
            </ul>
        </div>
        <div className="w-4/12">
            <h3 className="text-xl ">Resource</h3>
            <ul className="text-sm mt-2 text-gray-300">
                <li><NavLink to="/selfchack"  className=" list hover:text-slate-500" >Self Chack</NavLink></li>
                <li><NavLink to="/consult"  className=" list hover:text-slate-500" >Online Consult</NavLink></li>
                <li><NavLink to="/nar"  className=" list hover:text-slate-500" >Heart Rate Moniter</NavLink></li>
                <li><NavLink to="/nar"  className=" list hover:text-slate-500" >SP02 Moniter</NavLink></li>
            </ul>
        </div>
    </footer>
    <div className="mx-10  bottom-0"> Copyright © 2024 Healthcare 24/7 at home
    </div>
      
    </div>
  )
}

export default Footer
