import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';



const Onlineconsult = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
      axios.get('http://localhost:3001/').then((e)=>{
         
          if(!e.data.valid){
              alert("please login first ");
              navigate('/login')
          }
      })
  }, [])

  useEffect(() => {
    // Fetch the list of doctors from your API or backend service
    const fetchDoctors = async () => {
      // Replace this with your actual API endpoint
      axios.get('http://localhost:3001/doctor').then(async (response) => {

        const data = await response.data;
        setDoctors(data);
      })
    };
    // const mockDoctors = [
    //   // { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
    //   // { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
    //   // { id: 3, name: 'Dr. Emma Brown', specialization: 'Neurologist' },

    // ];

    // setDoctors(mockDoctors);

    fetchDoctors();
  }, []);

  const handleConsult = (doctorId) => {
    // Logic to start consultation with the doctor
    console.log(`Starting consultation with doctor ID: ${doctorId}`);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Available Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-800 mb-2">{doctor.Specialization}</p>
              <p className="text-gray-500 text-sm mb-2">{doctor.bio}</p>
              <NavLink to='/doctorcontect' type='button'
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => handleConsult(doctor.id)}
              >
                Start Consultation
              </NavLink>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onlineconsult;
