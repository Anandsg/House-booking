import { faHome, faMoneyCheckDollar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div className='fle py-4 px-8'>
            <div className='justify-between flex-col'>
                <p className='text-2xl font-serif py-8'>Rent the smart way with Nestaway!</p>
            </div>
            <div className='my-2'>
                <FontAwesomeIcon icon={faHome} />
                <span className='ml-2'>Great Homes</span>
            </div>
            <div className='my-2'>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <span className='ml-2'>Reliable Services</span>
            </div>
            <div className='my-2'>
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                <span className='ml-2'>Affordable Prices</span>
            </div>
        </div>
    );

}

export default Header;