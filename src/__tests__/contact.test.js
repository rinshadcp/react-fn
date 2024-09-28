import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should render the contact in dom", () => {
  render(<Contact />);

  const item = screen.getAllByRole("textbox");
  expect(item.length).toBe(2);
});
