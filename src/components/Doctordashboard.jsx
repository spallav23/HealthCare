import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';
import { data } from 'autoprefixer';

const Doctordashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const [socket, setsocket] = useState(io.connect(import.meta.env.VITE_SERVER_URL))
  useEffect(() => {
    axios.get(import.meta.env.VITE_SERVER_URL).then((e) => {

      if (!e.data.doctor) {
        alert("please login first ");
        navigate('/doctorlogin')
      }
      else {
        socket.emit("email", { messages: e.data.email })

      }
      
    })
  }, [])
  useEffect(() => {
    socket.on("message", async (e) => {
      alert("hello");
      setMessages(e);
    })
    socket.on("meet", async (e) => {
      const mc = await e;
      console.log(mc);
      window.location.href = await e.meetingCode;
    })
  }, [socket])





  useEffect(() => {
    // Fetch the doctor's updates from your API or backend service
    const fetchDashboardData = async () => {
      // Replace these with your actual API endpoints
      const appointmentsResponse = await fetch('/api/appointments');
      const messagesResponse = await fetch('/api/messages');
      const notificationsResponse = await fetch('/api/notifications');

      const appointmentsData = await appointmentsResponse.json();
      const messagesData = await messagesResponse.json();
      const notificationsData = await notificationsResponse.json();

      setAppointments(appointmentsData);
      setMessages(messagesData);
      setNotifications(notificationsData);


    };

    // fetchDashboardData();
  }, []);



  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Upcoming Appointments</h3>
            {appointments.map((appointment) => (
              <div key={appointment.id} className="mb-2">
                <p className="text-gray-700">
                  {appointment.date} - {appointment.patientName}
                </p>
                <p className="text-gray-500">{appointment.time}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Recent Messages</h3>
            {messages.map((message) => (
              <div key={message.id} className="mb-2">
                <p className="text-gray-700">
                  <strong>{message.name}:</strong> {message.message}
                </p>
                {/* <p className="text-gray-500 text-sm">{message.date}</p> */}
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Notifications</h3>
            {notifications.map((notification) => (
              <div key={notification.id} className="mb-2">
                <p className="text-gray-700">{notification.text}</p>
                <p className="text-gray-500 text-sm">{notification.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctordashboard;
