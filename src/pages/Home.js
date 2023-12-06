import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Body from '../components/Body';
import Featured from '../components/Featured';
import FeaturedList from '../components/FeaturedList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <div className='justify-center flex-row text-center'>
                <Featured />
                <h1 className='text-xl font-semibold justify-start flex mx-32'>
                    Browse by property type
                </h1>
                <FeaturedList />
            </div>
        </div>
    )
}

export default Home;