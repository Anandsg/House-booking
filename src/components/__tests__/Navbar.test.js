import { render, screen } from "@testing-library/react"
import Navbar from "../Navbar";
import "@testing-library/jest-dom";

it("should load the header component with button", () => {

    render(<Navbar />);

    const button = screen.getByText("button");
    expect(button).toBeInTheDocument();
});