import React, { useState } from "react";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const Submission = () => {
  // state variables for form fields
  const [authors, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");
  const [year, setYear] = useState("");
  const [volume, setVolume] = useState("");
  const [numberOfPages, setPages] = useState("");
  const [DOI, setDOI] = useState("");
  const [claims, setClaims] = useState("");
  const [methodology, setMethodology] = useState("");
  const [alertMsg, setalertMsg] = useState("");
  // checks if form fields are empty and if year and pages and volumes are numbers
  const validateForm = () => {
    return (
      authors.length > 0 &&
      title.length > 0 &&
      journal.length > 0 &&
      year.length > 0 &&
      volume.length > 0 &&
      numberOfPages.length > 0 &&
      DOI.length > 0 &&
      claims.length > 0 &&
      methodology.length > 0 &&
      isNaN(year) === false &&
      isNaN(numberOfPages) === false &&
      isNaN(volume) === false
    );
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        title,
        authors,
        journal,
        year,
        volume,
        numberOfPages,
        DOI,
        claims,
        methodology
      };
      console.log("data: ", data);
      try {
        const response = await axios.post("/api/speed/submission", data);
        // provide a success message to the user without alert
        setalertMsg(
          <Alert variant="success">
            <Alert.Heading>Submission successfully submitted!</Alert.Heading>
            <p>The moderator will review your entry soon!</p>
          </Alert>
        );
      } catch (error) {
        setalertMsg(
          <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>Please try again later.</p>
            <p>Error: {error.toString()}</p>
          </Alert>
        );
        console.log(error);
      }
    } else {
      alert(
        "Please fill out all fields and make sure year, number of pages, and volume are numbers"
      );
    }
  };

  return (
    <Container>
      <Row>
        <h2> Submitter's Page</h2>
        {/* Display alert message */}
        {alertMsg}
        {/* create a bootstrap form  withe fields author, year of publication, volume, number of pages, DOI field, claims, methodology */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Title"
              aria-label="Title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Jorunal</Form.Label>
            <Form.Control
              onChange={(e) => setJournal(e.target.value)}
              type="text"
              placeholder="Enter Journal"
              aria-label="Journal"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Enter Author"
              aria-label="Author"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year of Publication</Form.Label>
            <Form.Control
              onChange={(e) => setYear(e.target.value)}
              type="text"
              placeholder="Enter Year of Publication"
              aria-label="Year of Publication"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Volume</Form.Label>
            <Form.Control
              onChange={(e) => setVolume(e.target.value)}
              type="text"
              placeholder="Enter Volume"
              aria-label="Volume"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Pages</Form.Label>
            <Form.Control
              onChange={(e) => setPages(e.target.value)}
              type="text"
              placeholder="Enter Number of Pages"
              aria-label="Number of Pages"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DOI</Form.Label>
            <Form.Control
              onChange={(e) => setDOI(e.target.value)}
              type="text"
              placeholder="Enter DOI"
              aria-label="DOI"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Claims</Form.Label>
            <Form.Control
              onChange={(e) => setClaims(e.target.value)}
              type="text"
              placeholder="Enter Claims"
              aria-label="Claims"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Methodology</Form.Label>
            <Form.Control
              onChange={(e) => setMethodology(e.target.value)}
              type="text"
              placeholder="Enter Methodology"
              aria-label="Methodology"
            />
          </Form.Group>

          <Button variant="primary" onClick={submitData} type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Submission;
