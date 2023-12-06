import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, useParams } from 'react-router-dom';
import HouseDetailsContainer from "../HouseDetailsContainer";
import "@testing-library/jest-dom";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

it("should render HouseDetailsContainer with loading state and then display content", async () => {

    useParams.mockReturnValue({ id: '1' });

    render(
        <MemoryRouter initialEntries={['/houses/1']}>
            <Route path="/houses/:id">
                <HouseDetailsContainer />
            </Route>
        </MemoryRouter>
    );

    const shimmerElement = screen.getByTestId('shimmer-element');
    expect(shimmerElement).toBeInTheDocument();

    await waitFor(() => {

        const houseDetailsContent = screen.queryByTestId('house-details-content');
        expect(houseDetailsContent).toBeInTheDocument();
    });

    const shimmerElementAfterFetch = screen.queryByTestId('shimmer-element');
    expect(shimmerElementAfterFetch).not.toBeInTheDocument();
});
