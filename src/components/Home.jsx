import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const Home = () => {
   
    
  return (
    <div class=" bg-slate-200 m-0">
      <main >
        <div class="first px-28 py-24 flex">
            <div>
            <h1 class="w-8/12 text-6xl ">
                One Web For All Your Healthcare Needs

            </h1>
            <NavLink to="/learnmore"  className=" list hover:text-slate-500" >
                <button class="border-red-600 border-2 px-10 py-2  bg-red-600 rounded-lg my-10 text-white hover:bg-transparent hover:animate-pulse"> Learn
                    More</button>
            </NavLink>
        </div>
            <div class="h-72 w-72 mr-10">
                <img src="src/assets/img/1712905764415.png" alt=""/>
            </div>
        </div>
        <div class="box w-10/12 lg:h-60 items-center mx-auto bg-white border-2 rounded-2xl flex justify-around flex-col lg:flex-row">
            <div class="quick_btn">
            <NavLink to="/consult"  className=" list hover:text-slate-500" >
                    <div class="quick_logo ">
                        <img class="logo mx-auto" width={60} src="src/assets/img/1531645055.svg" alt=""/>
                    </div>
                    <button class="border-2 my-2 border-red-600 rounded-md px-6 py-3 shadow-black shadow-2xl hover:bg-red-500 hover:animate-pulse">Consult</button>
                </NavLink>
            </div>
            <div class="quick_btn">
            <NavLink to="/labtest"  className=" list hover:text-slate-500" >
                    <div class="quick_logo">
                        <img class="logo  mx-auto"width={60} src="src/assets/img/laboratory-science-test-tube-svgrepo-com.svg" alt=""/>
                    </div>
                    <button class="border-2 my-2 border-red-600 rounded-md px-6 py-3 shadow-black shadow-2xl hover:bg-red-500 hover:animate-pulse">Lab
                        Test</button>
                </NavLink>
            </div>
            <div class="quick_btn">
            <NavLink to="/bodycheck"  className=" list hover:text-slate-500" >
                    <div class="quick_logo">
                        <img class="logo  mx-auto" width={60} src="src/assets/img/i-imaging-alternative-ct-svgrepo-com.svg" alt=""/>
                    </div>
                    <button
                        class="border-2 my-2 border-red-600 rounded-md px-6 py-3 shadow-black shadow-2xl hover:bg-red-500 hover:animate-pulse">Scans</button>
                </NavLink>
            </div>

            <div class="quick_btn">
            <NavLink to="/selfchack"  className=" list hover:text-slate-500" >
                    <div class="quick_logo">
                        <img class="logo  mx-auto" width={60} src="src/assets/img/images.png" alt=""/>
                    </div>
                    <button class="border-2 my-2 border-red-600 rounded-md px-6 py-3 shadow-black shadow-2xl hover:bg-red-500 hover:animate-pulse">Self
                        Check</button>
                </NavLink>
            </div>
        </div>
        <div class="consult w-10/12 flex  mx-auto my-10 gap-10">
            <div class="img w-1/2">
                <img src="src/assets/img/video__consultation.jpg" alt=""/>
            </div>
            <div class="content w-1/2 px-10">
                <h3 class="text-2xl"> Consult Top Doctors Online </h3>
                <ul class="my-10 mx-10 text-gray-500 list-disc">
                    <li>Stomach Ache </li>
                    <li>Depression</li>
                    <li>Diabetes</li>
                    <li>Period Issue</li>
                    <li>Acne/Pimples</li>
                    <li>Fever</li>
                    <li>Hairfall</li>
                </ul>
                <NavLink to="/consult"  className=" list hover:text-slate-500" >

                    <button class="border-2 my-2 border-red-600 bg-white rounded-md px-6 py-3 shadow-black shadow-2xl  hover:bg-red-500 hover:animate-pulse">
                        Click Here
                    </button>
                </NavLink>
            </div>
        </div>
        <div class="services px-32 py-10 bg-white rounded-2xl">
            <h2 class="text-4xl w-">Book X-Rays,MRIs And Scans</h2>
            <div class="content flex justify-around py-10 flex-col lg:flex-row ">
                <div class="items">
                    <img src="src/assets/img/MRI Scan.png" class="w-32 " alt=""/>
                    <p class="text-lg  my-3">MRI Scan</p>
                    <NavLink to="/nar"  className=" list hover:text-slate-500" >Click Here</NavLink>
                </div>
                <div class="items">
                    <img src="src/assets/img/X-Ray.png" class="w-32 " alt=""/>
                    <p class="text-lg  my-3">X-Ray</p>
                    <NavLink to="/nar"  className=" list hover:text-slate-500" >Click Here</NavLink>
                </div>
                <div class="items">
                    <img src="src/assets/img/Ultrasound.jpeg" class="w-28 " alt=""/>
                    <p class="text-lg  my-3">Ultrasound</p>
                    <NavLink to="/nar"  className=" list hover:text-slate-500" >Click Here</NavLink>
                </div>
                <div class="items">
                    <img src="src/assets/img/ECG Scan.png" class="w-28 " alt=""/>
                    <p class="text-lg  my-3">ECG Scan</p>
                    <NavLink to="/nar"  className=" list hover:text-slate-500" >Click Here</NavLink>
                </div>
            </div>
        </div>
        <div class="contect w-10/12 mx-auto my-10 pt-1 bg-white h-52 rounded-full px-24 flex">
            <div class="left w-8/12">
                <h3 class="text-3xl my-10  ">We are here to help.</h3>
                <NavLink to="/contect"  className=" list hover:text-slate-500" >

                    <button class="bg-red-600 border-2 border-red-600 text-white px-7 py-3 rounded-2xl hover:bg-transparent hover:animate-pulse hover:text-red-600">Contect Us Now </button>
                </NavLink>
            </div>
            <div class="right w-4/12">
                <img src="src/assets/img/contect us.jpeg" alt=""/>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Home
