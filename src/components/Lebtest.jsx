import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Lebtest = () => {
    const navigate = useNavigate()
    const [labtest, setlabtest] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/').then((e) => {

            if (!e.data.valid) {
                alert("please login first ");
                navigate('/login')
            }
        })
        axios.get('http://localhost:3001/test').then((e) => {
            console.log(e.data);
            setlabtest(e.data);
        })
    }, [])
    console.log(labtest);
    return (
        <div>
            <main className="bg-white">
                <h1 className="w-8/12 text-6xl ml-10 mt-10 pt-10 mb-24">
                    Book Lab Test
                </h1>
                <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Available lab test</h2>
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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {labtest.map((lab) => (
                                <div key={lab.id} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">{lab.name}</h3>
                                    <p className="text-gray-800 mb-2">{lab.price}</p>
                                    <p className="text-gray-500 text-sm mb-2">{lab.details}</p>
                                    {/* <NavLink to='/doctorcontect' type='button'
                                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                        onClick={() => handleConsult(lab.id)}
                                    >
                                        Start Consultation
                                    </NavLink> */}
{/* 
        </div>
    ))
}
                        </div >
                        <div className="card w-3/12">
                            <img src="src/assets/img/l1.png" width={270} alt="" />
                            <h5>Urine Culture & Sensitivity Report</h5>
                            <button
                                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12">
                            <img src="src/assets/img/l2.png" width={270} alt="" />
                            <h5>C-Reactive Protein(CRP)</h5>
                            <button
                                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12">
                            <img src="src/assets/img/l3.png" width={270} alt="" />
                            <h5>Lipid Profile Test</h5>
                            <button
                                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                        <div className="card w-3/12">
                            <img src="src/assets/img/l4.png" width={270} alt="" />
                            <h5>Fasting Blood Glucose</h5>
                            <button
                                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                                Now</button>
                        </div>
                    </div >
    <div className="r2 flex">

        <div className="card w-3/12">
            <img src="src/assets/img/l5.png" width={270} alt="" />
            <h5>Complete Blood Count Test
                (CBC)</h5>
            <button
                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                Now</button>
        </div>
        <div className="card w-3/12">
            <img src="src/assets/img/l6.png" width={270} alt="" />
            <h5>Diabetes Test</h5>
            <button
                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                Now</button>
        </div>
        <div className="card w-3/12">
            <img src="src/assets/img/l7.png" width={270} alt="" />
            <h5>COVID-19 RT-PCR Test</h5>
            <button
                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                Now</button>
        </div>
        <div className="card w-3/12">
            <img src="src/assets/img/l8.png" width={270} alt="" />
            <h5>Thyroid Profile</h5>
            <button
                className="text-red-500 px-7 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white ">Book
                Now</button>
        </div>
    </div>
                </div > * /} */}
            </main >
        </div >
    )
}

export default Lebtest
