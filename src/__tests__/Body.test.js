import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_RES_DATA from "../mocks/restaurantListResData.json";
import "@testing-library/jest-dom";
import { act } from "react";
import { fireEvent } from "@testing-library/dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_DATA);
    },
  });
});

it("Should Search Res list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("res-card");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("res-card");
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter res card  according to Top Rated Restaurant Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("res-card");

  expect(cardsBeforeFilter.length).toBe(8);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterBtn);

  const cardsAfterFilter = screen.getAllByTestId("res-card");
  expect(cardsAfterFilter.length).toBe(6);
});
