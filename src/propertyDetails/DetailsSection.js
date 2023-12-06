import React from 'react';

const DetailsSection = ({ house }) => {
    return (
        <div className="my-5">
            <p className='font-semibold text-sm'>{house.description.short_description}</p>
            <div className="flex flex-wrap">
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
        </div>
    );
};

export default DetailsSection;
