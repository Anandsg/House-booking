import React from 'react';
import { render, screen } from "@testing-library/react";
import DetailsSection from "../DetailsSection";
import "@testing-library/jest-dom";

const mockHouse = {
    description: {
        short_description: 'Lorem ipsum dolor sit amet.'
    },
    bhk_details: '2 BHK',
    locality: 'Example Locality',
    room_available_count: 3,
    area: 1200,
    available_from: '2023-01-01',
    min_rent: 15000,
};

it("should render DetailsSection with correct details", () => {
    render(<DetailsSection house={mockHouse} />);

    const bhkDetails = screen.getByText('BHK Details: 2 BHK');
    expect(bhkDetails).toBeInTheDocument();

    const locality = screen.getByText('Locality: Example Locality');
    expect(locality).toBeInTheDocument();

});
