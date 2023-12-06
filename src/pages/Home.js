import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Body from '../components/Body';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertiesCards from '../components/PropertyCards';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <div className='justify-center flex-row text-center'>
                <FeaturedProperties />
                <h1 className='md:text-xl font-semibold justify-start flex mx-24 md:mx-32'>
                    Browse by property type
                </h1>
                <PropertiesCards />
            </div>
        </div>
    )
}

export default Home;