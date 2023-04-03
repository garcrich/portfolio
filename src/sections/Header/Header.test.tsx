import { render,screen } from "@testing-library/react";
import Header from "./Header";

describe("HeaderComponent", () => {
  it("renders the Header component", () => {
    render(<Header />)
    expect(screen.getByTestId("header")).toBeInTheDocument()
  })
})