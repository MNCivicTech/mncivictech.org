import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("home page", () => {
  it("can render", () => {
    render(<Home />);

    expect(screen.getByText("MN Civic Tech")).toBeInTheDocument();
    expect(screen.getByText("coming soon ...")).toBeInTheDocument();
  });
});
