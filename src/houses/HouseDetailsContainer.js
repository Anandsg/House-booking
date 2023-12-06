import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Shimmer from './Shimmer';
import HouseDetailsContent from './HouseDetailsContent';

const HouseDetailsContainer = () => {
    const { id } = useParams();
    const [house, setHouse] = useState(null);

    useEffect(() => {
        const fetchHouseDetails = async () => {
            try {
                const response = await fetch(
                    `https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17`
                );
                const data = await response.json();
                const selectedHouse = data.houses.find((house) => house.id === parseInt(id, 10));
                setHouse(selectedHouse);
            } catch (error) {
                console.error('Error fetching house details:', error);
            }
        };
        fetchHouseDetails();
    }, [id]);

    if (!house) {
        return <div><Shimmer /></div>;
    }

    return (
        <>
            <Navbar />
            <HouseDetailsContent house={house} />
        </>
    );
};

export default HouseDetailsContainer;
