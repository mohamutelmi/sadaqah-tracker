import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Trips = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [donationAmount, setDonationAmount] = useState(null);
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate('/donate', { state: { amount: donationAmount } });
  };

  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden">
      <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Give Zadaqah</h2>
        <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={() => setFormVisible(!isFormVisible)}>
          {isFormVisible ? 'Close Form' : '+ New Zadaqah'}
        </button>
      </div>
      {isFormVisible && (
        <div className="bg-gray-800 p-6 rounded-lg flex-grow">
          <h2 className="text-xl font-semibold text-white mb-4">Sadaqah on behalf of someone</h2>
          <div className="flex space-x-4">
            <button
              className={`py-2 px-4 rounded ${donationAmount === 50 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => setDonationAmount(50)}
            >
              £50
            </button>
            <button
              className={`py-2 px-4 rounded ${donationAmount === 80 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => setDonationAmount(80)}
            >
              £80
            </button>
            <button
              className={`py-2 px-4 rounded ${donationAmount === 100 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => setDonationAmount(100)}
            >
              £100
            </button>
            <button className="bg-white text-black py-2 px-4 rounded">£ Other</button>
          </div>
          <p className="text-white mt-4">can provide four people with medical treatment through a mobile health clinic in Jordan</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded mt-4" onClick={handleDonate}>Donate now</button>
        </div>
      )}
      {/* Existing Trip List Code */}
    </div>
  );
};

export default Trips;
