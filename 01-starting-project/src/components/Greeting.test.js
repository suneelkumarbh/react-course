import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
test("renders Hello World header", () => {
  render(<Greeting />);
  const helloWorldElement = screen.getByText("Hello world!");
  expect(helloWorldElement).toBeInTheDocument();
});
