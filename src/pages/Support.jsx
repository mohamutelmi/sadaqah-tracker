import React, { useState } from 'react';
import contactImage from '../assets/contact-image.png'; // Adjust the path as necessary

const Support = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) {
      errors.email = 'E-mail is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'E-mail is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-200 h-full">
      <div className="md:w-1/2">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mt-6 md:mt-0">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        {isSubmitted ? (
          <div className="text-green-600">
            <p>Your message was sent successfully. We will contact you soon, InshaAllah.</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded" onClick={() => setIsSubmitted(false)}>OK</button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-900"
              />
              {formErrors.fullName && <p className="text-red-600 text-sm">{formErrors.fullName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-900"
              />
              {formErrors.email && <p className="text-red-600 text-sm">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-900"
              ></textarea>
              {formErrors.message && <p className="text-red-600 text-sm">{formErrors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Contact Us</button>
          </form>
        )}
        <div className="mt-6">
          <p className="text-gray-700">
            <strong>Contact</strong><br />
            abdirashiid123@gmail.com
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Based in</strong><br />
            Mogadishu, Somalia
          </p>
        </div>
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-black"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-black"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-black"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Support;
