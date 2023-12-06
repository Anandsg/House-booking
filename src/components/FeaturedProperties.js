import React from 'react'
import {
    PROPERTY_IMG_URL1,
    PROPERTY_IMG_URL2,
    PROPERTY_IMG_URL3,
    PROPERTY_IMG_URL4
} from '../utils/constants';

const FeaturedProperties = () => {
    return (
        <div className="flex gap-4 py-8 justify-center">
            <div className="hidden md:inline-block">
                <img
                    src={PROPERTY_IMG_URL1}
                    alt=""
                    className="w-72 rounded-lg"
                />
                <div className="text-sm p-4">
                    <h1>Electronic city</h1>
                    <h2>CV Raman Nagar</h2>
                </div>
            </div>

            <div className="hidden md:inline-block">
                <img
                    src={PROPERTY_IMG_URL2}
                    alt=""
                    className="w-72 rounded-lg"
                />
                <div className="text-sm p-4">
                    <h1>Bangalore</h1>
                    <h2>BTM layout stage 1</h2>
                </div>
            </div>
            <div className="hidden md:inline-block">
                <img
                    src={PROPERTY_IMG_URL3}
                    alt=""
                    className="w-72 rounded-lg"
                />
                <div className="text-sm p-4">
                    <h1>Bangalore</h1>
                    <h2>HR colony, Koramangala</h2>
                </div>
            </div>
            <div className="hidden md:inline-block">
                <img
                    src={PROPERTY_IMG_URL4}
                    alt=""
                    className="w-72 rounded-lg"
                />
                <div className="text-sm p-4">
                    <h1>Manyata tech park</h1>
                    <h2>Nagarabavi, 2nd cross</h2>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;