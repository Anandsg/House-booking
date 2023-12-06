import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HouseDetails = () => {
    const { id } = useParams();
    const [house, seHouse] = useState(null);

    useEffect(() => {
        const fetchHouseDetails = async () => {
            try {
                const response = await fetch(
                    `https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17`
                );
                const data = await response.json();
                const selectedHouse = data.houses.find((house) => house.id === parseInt(id, 10));
                seHouse(selectedHouse)
            } catch (error) {
                console.error('Error fetching house details:', error);
            }
        };
        fetchHouseDetails();
    }, [id]);

    if (!house) {
        return <div>Loading...</div>;
    }
    return (
        <div class="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 class="text-2xl font-bold mb-4">{house.title}</h2>
            <img src={house.image_url} alt={house.title} class="mb-4 rounded-md w-full" />

            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 text-gray-600">
                    <p>BHK Details: {house.bhk_details}</p>
                    <p>House Type: {house.house_type}</p>
                    <p>Locality: {house.locality}</p>
                    <p>Available Rooms: {house.room_available_count}</p>
                    <p>Minimum Rent: ₹{house.min_rent}</p>
                </div>
                <div class="w-full md:w-1/2 text-gray-600">
                    <p>Gender: {house.gender}</p>
                    <p>Furnishing: {house.furnishing_type}</p>
                    <p>Area: {house.area} sq.ft</p>
                    <p>Available from: {house.available_from}</p>
                    <p>Description: {house.description.short_description}</p>
                </div>
            </div>

            {/* Additional Details Section */}
            <div class="mt-8">
                <h3 class="text-lg font-semibold mb-2">Additional Details</h3>
                {house.amenity_list && house.amenity_list.length > 0 && (
                    <div>
                        <p class="text-gray-600">Amenities:</p>
                        <ul class="list-disc pl-4">
                            {house.amenity_list.map((amenity, index) => (
                                <li key={index} class="text-gray-600">
                                    {amenity.amenity}
                                    {amenity.icon_url && (
                                        <img src={amenity.icon_url} alt={amenity.amenity} class="inline-block w-4 h-4 ml-2" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>

    )
}

export default HouseDetails;