import {render, screen} from "@testing-library/react";
import Project from "./_Project";

const mockProject = {
  title: "Project",
  description: "Description",
}


describe("Project", () => {

  it("renders the project", () => {
    render(
      <Project 
        title={mockProject.title} 
        description={mockProject.description} 
      />
    )
    expect(screen.getByTestId("project")).toBeInTheDocument()
  })

  it('renders the correct project title', () => {
    render(
      <Project 
        title={mockProject.title} 
        description={mockProject.description} 
      />
    )
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
  });

  it('renders the correct project description', () => {
    render(
      <Project 
        title={mockProject.title} 
        description={mockProject.description} 
      />
    )
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
  });
})