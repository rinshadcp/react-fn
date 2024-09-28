import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact component related test cases", () => {
  it("Should render the contact in dom", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should 2 textbox(input) in the Contact Component", () => {
    render(<Contact />);

    const textboxes = screen.getAllByRole("textbox");

    //assertion

    expect(textboxes.length).toBe(2);
  });
});
