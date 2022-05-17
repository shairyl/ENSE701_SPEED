import { render, screen } from "@testing-library/react";
import Submission from "./pages/submission";

describe("Submission Form Testing", () => {
  it("should render the form", () => {
    render(<Submission />);
    expect(screen.getByText("Submitter's Page")).toBeInTheDocument();
    // check for the form fields
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Jorunal")).toBeInTheDocument();
    expect(screen.getByText("Year of Publication")).toBeInTheDocument();
    expect(screen.getByText("Volume")).toBeInTheDocument();
    expect(screen.getByText("Number of Pages")).toBeInTheDocument();
    expect(screen.getByText("DOI")).toBeInTheDocument();
    expect(screen.getByText("Claims")).toBeInTheDocument();
    expect(screen.getByText("Methodology")).toBeInTheDocument();
  });
});
