import React, { useState } from 'react';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"

const Body = () => {
    const [OpenDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const toggleDateForm = () => {
        setOpenDate(!OpenDate);
    }
    return (
        <div className="flex items-center justify-center space-x-4">
            <input
                className="border border-gray-300 rounded-md w-3/12 p-2 text-sm focus:outline-none focus:ring"
                placeholder="Where are you planning your next property?"
            />

            <button className="bg-blue-200 p-2 rounded-md text-sm hover:bg-blue-300 focus:outline-none focus:ring">
                Search
            </button>

            <div className="flex items-center space-x-2 bg-blue-200 p-2 rounded-md">
                <FontAwesomeIcon icon={faCalendarDays} className="text-" />
                <span
                    onClick={toggleDateForm}
                    className="bg-blue-200 text-sm cursor-pointer">
                    {`${format(date[0].startDate, "MM/dd/yyyy")} 
                    to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
            </div>
            <div className='absolute top-[44%] right-52 '>
                {OpenDate && <DateRange
                    className="flex"
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                />}
            </div>
        </div>
    );
}

export default Body;