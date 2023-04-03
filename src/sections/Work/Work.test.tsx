import { render,screen } from "@testing-library/react";
import Recommendations from "./Work";

describe("WorkComponent", () => {
  it("renders the Work component", () => {
    render(<Recommendations />)
    expect(screen.getByTestId("work")).toBeInTheDocument()
  })
})