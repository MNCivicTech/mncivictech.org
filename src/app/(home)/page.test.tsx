import Home from "@/app/(home)/page";
import { render, screen } from "@testing-library/react";

describe("home page", () => {
  it("can render", () => {
    render(<Home />);

    expect(
      screen.getByText("Building Civic Tech for Minnesota"),
    ).toBeInTheDocument();
  });
});
