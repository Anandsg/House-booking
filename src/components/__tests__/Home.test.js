import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Home from "../../pages/Home";

it("should load the text", () => {
    render(<Home />);

    const heading = screen.getByText("Browse by property type");

    expect(heading).toBeInTheDocument();
});
