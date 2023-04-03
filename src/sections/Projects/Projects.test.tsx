import { render,screen } from "@testing-library/react";
import Projects from "./Projects";

describe("ProjectsComponent", () => {
  it("renders the Projects component", () => {
    render(<Projects />)
    expect(screen.getByTestId("projects")).toBeInTheDocument()
  })
})