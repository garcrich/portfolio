import { render,screen } from "@testing-library/react";
import Projects from "./Projects";
import { projectsData } from "./projectsData";

describe("ProjectsComponent", () => {
  it("renders the Projects component", () => {
    render(<Projects />)
    expect(screen.getByTestId("projects")).toBeInTheDocument()
  })

  it('renders the correct number of projects', () => {
    render(<Projects />)
    const projectElements = screen.getAllByTestId('project');
    expect(projectElements.length).toBe(projectsData.length);
  })

})