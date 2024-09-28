import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPopularLabel } from "../components/RestaurantCard";
import restaurantCardData from "../mocks/restaurantCard.json";
import "@testing-library/jest-dom";

it("Should render the Restaurant Card Component", () => {
  render(<RestaurantCard resData={restaurantCardData} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

it("Should render the Popular label(HOC) in the Restaurant Card Component", () => {
  const WithPopularLabelComponent = withPopularLabel(RestaurantCard);
  render(<WithPopularLabelComponent resData={restaurantCardData} />);

  const label = screen.getByText("Popular");

  expect(label).toBeInTheDocument();
});
