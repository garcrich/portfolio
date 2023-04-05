import { render,screen } from "@testing-library/react";
import Hero from "./Hero";

describe("HeroComponent", () => {
  it("renders the Header component", () => {
    render(<Hero />)
    expect(screen.getByTestId("hero")).toBeInTheDocument()
  })
})