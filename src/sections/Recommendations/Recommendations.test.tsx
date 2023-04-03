import { render,screen } from "@testing-library/react";
import Recommendations from "./Recommendations";

describe("RecommendationsComponent", () => {
  it("renders the Recommendations component", () => {
    render(<Recommendations />)
    expect(screen.getByTestId("recommendations")).toBeInTheDocument()
  })
})