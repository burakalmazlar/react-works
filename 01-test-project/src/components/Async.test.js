import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return [{ id: "mockId", title: "Mock Post" }];
      },
    });

    // Arrange
    render(<Async />);

    //Act

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });

  test("renders ", () => {});
});
