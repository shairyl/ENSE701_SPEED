import { render, screen } from "@testing-library/react";
import Submission from "./pages/submission";
import SearchPage from "./pages/searchPage";

describe("Submission Form Testing", () => {
  window.alert = jest.fn();

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
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("form validation -empty fields", () => {
    window.alert.mockClear();
    //check if alert is displayed when the form is submitted without filling the required fields
    render(<Submission />);
    const alertMock = jest.spyOn(window, "alert");
    console.log("alertMock: ", alertMock);
    const submitButton = screen.getByText("Submit");
    submitButton.click();

    expect(alertMock).toHaveBeenCalledTimes(1);
    // check if a browser alert is displayed
  });

  it("form validation -non-numeric fields", () => {
    window.alert.mockClear();
    //check if alert is displayed when the form is submitted with non-numeric fields
    render(<Submission />);
    const alertMock = jest.spyOn(window, "alert");
    console.log("alertMock: ", alertMock);
    const submitButton = screen.getByText("Submit");
    // fill in the form with non-numeric fields
    const title = screen.getByLabelText("Title");
    const journal = screen.getByLabelText("Journal");
    const author = screen.getByLabelText("Author");
    const year = screen.getByLabelText("Year of Publication");
    const volume = screen.getByLabelText("Volume");
    const numberOfPages = screen.getByLabelText("Number of Pages");
    const doi = screen.getByLabelText("DOI");
    const claims = screen.getByLabelText("Claims");
    const methodology = screen.getByLabelText("Methodology");
    const name = screen.getByLabelText("Name");
    const email = screen.getByLabelText("Email");

    title.value = "test";
    journal.value = "test";
    author.value = "test";
    year.value = "test";
    volume.value = "test";
    numberOfPages.value = "test";
    doi.value = "test";
    claims.value = "test";
    methodology.value = "test";
    name.value = "test";
    email.value = "test";

    submitButton.click();

    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});

describe("Search Page Testing", () => {
  it("should render the form", () => {
    render(<SearchPage />);
    expect(screen.getByText("Search Page")).toBeInTheDocument();
    expect(screen.getByText("Claims")).toBeInTheDocument();
    expect(screen.getByText("Methodology")).toBeInTheDocument();

    // check for submit button
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
