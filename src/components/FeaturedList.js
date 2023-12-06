import React, { useEffect, useState } from 'react'
import { No_PIC_URL } from '../utils/constants';

const FeaturedList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getHousesList()
    }, []);

    const getHousesList = async () => {
        try {
            const response = await fetch(
                "https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17"
            );
            const data = await response.json();
            setHouses(data.houses);
            console.log(data.houses);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className='flex flex-wrap gap-8 justify-center p-8'>
            {houses.map((house) => (
                house.image_url && house.image_url !== No_PIC_URL &&
                <div className='text-sm shadow-lg hover:cursor-pointer hover:shadow-xl'
                    key={house.id}>
                    <img className='w-60 m-4 rounded-lg' src={house.image_url} alt={house.title} />
                    <div className='flex justify-between mx-5'>
                        <h3 className=''>{house.title}</h3>
                        <p className=''>Rent: ₹{house.rent}</p>
                    </div>
                    <p className='py-4'>Locality: {house.locality || "Bangalore"}</p>
                    <button className='bg-blue-200 py-2 p-2 m-4 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring'>View details</button>
                </div>

            ))}
        </div>
    );
};

export default FeaturedList;