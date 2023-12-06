import React, { useState } from 'react';
import BookingForm from './BookingForm';
import DetailsSection from './DetailsSection';
import AdditionalDetailsSection from './AdditionalDetailsSection';

const HouseDetails = ({ house }) => {
    const [showForm, setShowForm] = useState(false);

    const handleBookingSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
        alert('Property booked!');
        setShowForm(false);
    };

    const handleBookingClick = () => {
        setShowForm(true);
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">{house.title}</h2>
            <img src={house.image_url} alt={house.title} className="mb-4 rounded-md w-full" />
            <DetailsSection house={house} />
            <AdditionalDetailsSection house={house} />
            <div className="flex justify-center">
                <button
                    className='bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring'
                    onClick={handleBookingClick}
                >
                    Book property
                </button>
            </div>

            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
                    <div className="bg-white p-8 rounded-md z-10">
                        <BookingForm onSubmit={handleBookingSubmit} onClose={() => setShowForm(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HouseDetails;
