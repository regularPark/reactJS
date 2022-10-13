import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World! as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Assert
    const outputElement = screen.getByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders It's good to see ", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders no good to see you when button clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
