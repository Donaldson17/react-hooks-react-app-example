import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Now in the h1", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Now");
});

test("renders ExampleComponent", () => {
  render(<App />);
  expect(screen.getByText(/Sunglasses GIF/i)).toBeInTheDocument();
});

test("renders TestComponent", () => {
  render(<App />);
  expect(screen.getByText(/Test Component/i)).toBeInTheDocument();
});