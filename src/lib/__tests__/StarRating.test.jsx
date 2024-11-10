import { render, fireEvent } from "@testing-library/react";
import StarRating from "../index";

describe("StarRating", () => {
  test("renders correct number of stars", () => {
    const { container } = render(<StarRating maxRating={5} />);
    expect(container.querySelectorAll("svg")).toHaveLength(5);
  });

  test("handles half-star ratings", () => {
    const onSetRating = jest.fn();
    const { container } = render(
      <StarRating allowHalf maxRating={5} onSetRating={onSetRating} />
    );
    // Add test cases for half-star functionality
  });
});
