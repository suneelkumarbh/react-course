import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World header", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello world!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if button is NOT clicked", () => {
    render(<Greeting />);
    const goodToSeeElement = screen.getByText("good to see", { exact: false });
    expect(goodToSeeElement).toBeInTheDocument();
  });

  test("renders 'Changed' if button is clicked", () => {
    render(<Greeting />);
    const changedButton = screen.getByRole("button");
    userEvent.click(changedButton);

    const changedElement = screen.getByText("Changed!");
    expect(changedElement).toBeInTheDocument();
  });

  test("do not renders 'good to see you' if button is clicked", () => {
    render(<Greeting />)

    const changeTextButton = screen.getByRole("button");
    const goodToSeeElement = screen.getByText("good to see", { exact: false });
    userEvent.click(changeTextButton);

    expect(goodToSeeElement).not.toBeInTheDocument();
  })
});
