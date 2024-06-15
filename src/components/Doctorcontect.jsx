
import React, { useState } from 'react';

const Doctorcontect = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [videoCall, setVideoCall] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChat([...chat, { user: 'user', text: message }]);
      setMessage('');
      // Here you can add the logic to send the message to the doctor
    }
  };

  const startVideoCall = () => {
    setVideoCall(true);
    // Logic to start the video call
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-white rounded-lg shadow-lg p-4 flex-grow mb-4">
        <h2 className="text-2xl font-bold mb-4">Consult with a Doctor</h2>
        <div className="chat-box flex flex-col bg-gray-50 p-4 rounded-lg mb-4 flex-grow overflow-y-auto">
          {chat.map((c, index) => (
            <div key={index} className={`mb-2 ${c.user === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${c.user === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                {c.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="border-gray-300 rounded-l-lg p-2 flex-grow focus:ring-blue-500 focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
      <button
        className="bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600"
        onClick={startVideoCall}
      >
        Start Video Call
      </button>
      {videoCall && (
        <div className="video-call-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Video Call with Doctor</h3>
            <p>Video call is active...</p>
            <button
              className="bg-red-500 text-white p-2 rounded-lg mt-4"
              onClick={() => setVideoCall(false)}
            >
              End Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctorcontect;