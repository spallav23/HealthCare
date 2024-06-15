import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Fullbodychack = () => {
    const navigate = useNavigate()
    const [labtest, setlabtest] = useState([])
    const [email, setemail] = useState()
    useEffect(() => {
        axios.get('http://localhost:3001/').then((e) => {
        
            if (!e.data.valid) {
                alert("please login first ");
                navigate('/login')
            }
            else{
                setemail(e.data.email)
            }
        })
        axios.get('http://localhost:3001/booktest',{email:email}).then((e) => {
            console.log(e.data);
            setlabtest(e.data);
        })
    }, [])
    return (
        <div>
            <main className="bg-slate-300 pb-16">
                <h1 className="w-8/12 text-6xl ml-10 mt-10 pt-10 mb-24">
                    Histroy
                </h1>
               


                    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-4">Booked lab test</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {labtest.map((lab) => (
                                    <div key={lab.id} className="bg-white p-4 rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-2">{lab.name}</h3>
                                        <p className="text-gray-800 mb-2">price : {lab.price}</p>
                                        <p className="text-gray-500 text-sm mb-2">{lab.details}</p>
                                        <NavLink to='/doctorcontect' type='button'
                                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                            onClick={() => handleConsult(lab.id)}
                                        >
                                            Book Now
                                        </NavLink>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="cards  w-10/12 mx-auto mb-32">



                    <div className="r1 my-10 flex">

                        <div className="card w-3/12  mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">Ayushman Health Screening</h6>
                            <p className="m-5 ">FBS , TSH , LFT</p>
                            <h6 className="text-xl m-5">RS.599(60% off)</h6>
                            <button className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12 mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">Basic Health Check</h6>
                            <p className="m-5 ">FBS , TSH , LFT , lipid profile</p>
                            <h6 className="text-xl m-5">\RS.999(60% off)</h6>
                            <button
                                className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12 mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">Essential Health Check</h6>
                            <p className="m-5 ">HbA1c, kidney , iron studies , lipid profile</p>
                            <h6 className="text-xl m-5">RS.1200(60% off)</h6>
                            <button
                                className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12 mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">Vital Health Check</h6>
                            <p className="m-5 ">FBS , CBC , kidney , Vitamin profile</p>
                            <h6 className="text-xl m-5">RS.1650(60% off)</h6>
                            <button
                                className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>

                    </div>
                    <div className="r2 flex">
                        <div className="card w-3/12 mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">Advance Health Check</h6>
                            <p className="m-5 ">Electrolyter, pancreas ,KFT , LFT, Minerals ,HsCRP</p>
                            <h6 className="text-xl m-5">RS.2399(60% off)</h6>
                            <button
                                className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12 mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">comprehensive Health Check
                                mal</h6>
                            <p className="m-5 ">Electrolyter, pancreas ,KFT , LFT, Minerals </p>
                            <h6 className="text-xl m-5">RS.3400(60% off)</h6>
                            <button
                                className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12 mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">comprehensive Health Check femal</h6>
                            <p className="m-5 ">Electrolyter, pancreas ,Vitamin Profile</p>
                            <h6 className="text-xl m-5">RS.3400(60% off)</h6>
                            <button
                                className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12 mx-2 py-2 bg-slate-200 text-black shadow-xl shadow-black ">
                            <h6 className="text-xl  mb-5 border-2 border-white">Texsaver Health Check For Male-Femal Both</h6>
                            <p className="m-5 ">KFT ,LFT ,Panceras , HBsAg , LDH & More</p>
                            <h6 className="text-xl m-5">RS.4900(60% off)</h6>
                            <button
                                className="text-red-500 mx-16 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>

                    </div>
                </div>
         */}
            </main >
        </div >
    )
}

export default Fullbodychack
