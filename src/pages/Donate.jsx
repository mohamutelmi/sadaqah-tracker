import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PayPalForm from '../components/PayPalForm';
import CreditCardForm from '../components/CreditCardForm';

const Donate = () => {
  const { state } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (formData) => {
    // Handle the payment processing here
    console.log('Payment data:', formData);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">You have successfully donated</h2>
        <p className="text-xl text-white">Thanks, your charity will lead you to Jannah.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-bold text-white">You are donating £{state?.amount}</h2>
      </div>
      {!paymentMethod && (
        <div className="bg-gray-800 p-6 rounded-lg flex-grow">
          <label className="text-white">
            <input type="checkbox" className="mr-2" />
            Boost your donation by £{(state?.amount * 0.25).toFixed(2)} at no extra cost to you with Gift Aid
          </label>
          <div className="mt-4">
            <h3 className="text-white">Choose donation method:</h3>
            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={() => setPaymentMethod('PayPal')}>PayPal</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded" onClick={() => setPaymentMethod('CreditCard')}>Debit or credit card</button>
            </div>
          </div>
        </div>
      )}
      {paymentMethod && (
        <div className="bg-gray-800 p-6 rounded-lg flex-grow">
          {paymentMethod === 'PayPal' && (
            <PayPalForm onSubmit={handlePayment} />
          )}
          {paymentMethod === 'CreditCard' && (
            <CreditCardForm onSubmit={handlePayment} />
          )}
        </div>
      )}
    </div>
  );
};

export default Donate;
