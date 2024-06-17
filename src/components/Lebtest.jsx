import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Lebtest = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState()
    const [labtest, setlabtest] = useState([])
    useEffect(() => {
        axios.get(import.meta.env.VITE_SERVER_URL).then((e) => {

            if (!e.data.valid) {
                alert("please login first ");
                navigate('/login')
            }
            else {
                setemail(e.data.email)
            }
        })
        axios.get(import.meta.env.VITE_SERVER_URL + '/test').then((e) => {

            setlabtest(e.data);
        })
    }, [])

    function handlebook(a) {
        axios.post('http://localhost:3001/booked', {test:a, email: email }).then(() => {
            alert(a.name+" is boked");

        })
    }
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
                                <div key={lab._id} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">{lab.name}</h3>
                                    <p className="text-gray-800 mb-2">price : {lab.price}</p>
                                    <p className="text-gray-500 text-sm mb-2">{lab.details}</p>
                                    <NavLink state={{ info:lab._id}}  type='button'
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => handlebook(lab)}
              >
                Book Test
              </NavLink>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main >
        </div >
    )
}

export default Lebtest
