import React from 'react'

const Featured = () => {
    return (
        <div className="flex gap-4 py-8 justify-center">
            <div className="">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/468518948.jpg?k=bf90ce6fc72cba0193a31d08f5915b4cae9bc67fff126944ecc5c1847f89a800&o=&hp=1"
                    alt=""
                    className="w-72 rounded-lg"
                />
                <div className="text-sm p-4">
                    <h1>Electronic city</h1>
                    <h2>CV Raman Nagar</h2>
                </div>
            </div>

            <div className="">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/468518961.jpg?k=13e6ccfa7bfdf356b0dcf1dfa8f5f22723cd1d2689e121d2b7541232613f8701&o=&hp=1"
                    alt=""
                    className="w-72 rounded-lg"
                />
                <div className="text-sm p-4">
                    <h1>Bangalore</h1>
                    <h2>BTM layout stage 1</h2>
                </div>
            </div>
            <div className="">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/278738443.jpg?k=82f99d868746213e8c4703e6827098d3b8e6eab6c213c09e77f56735d1fd6ec3&o=&hp=1"
                    alt=""
                    className="w-72 rounded-lg"
                />
                <div className="text-sm p-4">
                    <h1>Bangalore</h1>
                    <h2>HR colony, Koramangala</h2>
                </div>
            </div>
            <div className="">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/253085270.jpg?k=dda7047f0786c42a2b811f4fbfbc75bc1eb8a8d4821eeb4b5c21da9f38600e52&o=&hp=1"
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

export default Featured;