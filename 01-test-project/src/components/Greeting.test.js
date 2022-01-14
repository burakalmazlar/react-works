import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting conponent", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ...

    // Assert
    const helloWorldElement = screen.getByText("Hello", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Good to see You if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ...

    // Assert
    const goodToSeeYouElement = screen.getByText("It's good to see you.", {
      exact: false,
    });
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test("renders Changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const changedElement = screen.getByText("Changed!", {
      exact: false,
    });
    expect(changedElement).toBeInTheDocument();
  });

  test("dont renders good to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const changedElement = screen.queryByText("It's good to see you.", {
      exact: false,
    });
    expect(changedElement).toBeNull();
  });

  test("dont renders changed if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ...

    // Assert
    const changedElement = screen.queryByText("Changed!", {
      exact: false,
    });
    expect(changedElement).toBeNull();
  });
});
