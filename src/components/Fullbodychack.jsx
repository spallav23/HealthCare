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
        axios.get(import.meta.env.VITE_SERVER_URL).then(async(e) => {

            if (!e.data.valid) {
                alert("please login first ");
                navigate('/login')
            }
            else {
                setemail(e.data.email)
                await axios.post(import.meta.env.VITE_SERVER_URL+'/booktest', { email:e.data.email }).then((e) => {
                    setlabtest(e.data);
                })
            }
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
                                    <h3 className="text-xl font-semibold mb-2">{lab.test.name}</h3>
                                    <p className="text-gray-800 mb-2">price : {lab.test.price}</p>
                                    <p className="text-gray-500 text-sm mb-2">{lab.test.details}</p>
                                 

                                </div>
                            ))}
                        </div>
                    </div>
                
                </div>
                
            </main >
        </div >
    )
}

export default Fullbodychack
