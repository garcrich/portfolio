import { render, screen } from "@testing-library/react";
import Position from "./_Position";

describe("PositionComponent", () => {
  const job = {
    company: "Test Company",
    position: "Test Position",
    description: [
      "Test Description 1",
      "Test Description 2",
      "Test Description 3",
    ],
  };

  it("renders the Position component", () => {
    render(<Position job={job} />);
    expect(screen.getByTestId("position")).toBeInTheDocument();
  });

  it("displays the correct company and position", () => {
    render(<Position job={job} />);
    expect(screen.getByText("Test Company")).toBeInTheDocument();
    expect(screen.getByText("Test Position")).toBeInTheDocument();
  });

  it("renders the correct number of description items", () => {
    render(<Position job={job} />);
    const descriptionItems = screen.getAllByTestId("description-item");
    expect(descriptionItems.length).toBe(3);
  });
});
