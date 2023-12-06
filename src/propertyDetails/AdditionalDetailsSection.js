import React from 'react';

const AdditionalDetailsSection = ({ house }) => {
    return (
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
    );
};

export default AdditionalDetailsSection;
