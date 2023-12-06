import React, { useState } from 'react';

const BookingForm = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="ml-2 bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 focus:outline-none focus:ring"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
