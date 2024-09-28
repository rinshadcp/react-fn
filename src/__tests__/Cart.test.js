import { render } from "@testing-library/react";
import { act } from "react";
import ResMenu from "../components/ResMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import MOCK_DATA from "../mocks/restauantMenuData.json";
import { fireEvent, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

describe("cart related tests", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
  );

  it("Should render the accordion Title Bread", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <ResMenu />
        </Provider>
      )
    );
    const title = screen.getByText("Breads (3)");
    expect(title).toBeInTheDocument();
  });

  it("Should render the 3 item list when click the according title Breads(3)", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <ResMenu />
        </Provider>
      )
    );
    const title = screen.getByText("Breads (3)");
    fireEvent.click(title);
    expect(screen.getAllByTestId("itemList").length).toBe(3);
  });

  it("Should change the cart items count in the Header when click add button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
          </Provider>
        </BrowserRouter>
      )
    );
    const title = screen.getByText("Breads (3)");
    fireEvent.click(title);
    expect(screen.getAllByTestId("itemList").length).toBe(3);
    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    expect(screen.getByText("Cart - (0) items")).toBeInTheDocument();
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1) items")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2) items")).toBeInTheDocument();
  });

  it("Should render the added items in the cart Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    expect(screen.getAllByTestId("cart-item").length).toBe(2);
  });
});
