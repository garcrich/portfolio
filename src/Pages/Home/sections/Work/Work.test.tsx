import { render, screen } from "@testing-library/react";
import Work from "./Work";

describe("WorkComponent", () => {
  it("renders the Work component", () => {
    render(<Work />);
    expect(screen.getByTestId("work")).toBeInTheDocument();
  });

  it("renders the correct number of Position components", () => {
    render(<Work />);
    const positionElements = screen.getAllByTestId("position");
    expect(positionElements.length).toBe(5);
  });
});
