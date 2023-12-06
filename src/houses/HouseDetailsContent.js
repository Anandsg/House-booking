import React, { useState } from 'react';
import BookingForm from './BookingForm';

const HouseDetailsContent = ({ house }) => {
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
            <p className='font-semibold text-sm'>{house.description.short_description}</p>
            <div className="flex flex-wrap my-5">
                <div className="w-full md:w-1/2 text-gray-600 text-left">
                    <p className='mb-2'>BHK Details: {house.bhk_details}</p>
                    <p className='mb-2'>Locality: {house.locality}</p>
                    <p className='mb-2'>Available Rooms: {house.room_available_count}</p>

                </div>
                <div className="w-full md:w-1/2 text-gray-600 text-left">
                    <p className='mb-2'>Area: {house.area} sq.ft</p>
                    <p className='mb-2'>Available from: {house.available_from}</p>
                    <p className='mb-2'>Minimum Rent: ₹{house.min_rent}</p>
                </div>
            </div>

            {/* Additional Details Section */}
            <div className="">
                <h3 className="text-lg font-semibold mb-2">Additional Details</h3>
                {house.amenity_list && house.amenity_list.length > 0 && (
                    <div>
                        <p className="text-gray-600">Amenities:</p>
                        <ul className="list-disc pl-4">
                            {house.amenity_list.map((amenity, index) => (
                                <li key={index} className="text-gray-600">
                                    {amenity.amenity}
                                    {amenity.icon_url && (
                                        <img src={amenity.icon_url} alt={amenity.amenity} className="inline-block w-4 h-4 ml-2" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex justify-center">
                <button className='bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring'
                    onClick={handleBookingClick}>
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

export default HouseDetailsContent;
