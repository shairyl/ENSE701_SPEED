import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
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

  const submitData = async (e) => {
    e.preventDefault();
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <h2> Submitter's Page</h2>

        {/* create a bootstrap form  withe fields author, year of publication, volume, number of pages, DOI field, claims, methodology */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label for="Title">Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Author"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Jorunal</Form.Label>
            <Form.Control
              onChange={(e) => setJournal(e.target.value)}
              type="text"
              placeholder="Enter Author"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Enter Author"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year of Publication</Form.Label>
            <Form.Control
              onChange={(e) => setYear(e.target.value)}
              type="text"
              placeholder="Enter Year of Publication"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Volume</Form.Label>
            <Form.Control
              onChange={(e) => setVolume(e.target.value)}
              type="text"
              placeholder="Enter Volume"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Pages</Form.Label>
            <Form.Control
              onChange={(e) => setPages(e.target.value)}
              type="text"
              placeholder="Enter Number of Pages"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DOI</Form.Label>
            <Form.Control
              onChange={(e) => setDOI(e.target.value)}
              type="text"
              placeholder="Enter DOI"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Claims</Form.Label>
            <Form.Control
              onChange={(e) => setClaims(e.target.value)}
              type="text"
              placeholder="Enter Claims"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Methodology</Form.Label>
            <Form.Control
              onChange={(e) => setMethodology(e.target.value)}
              type="text"
              placeholder="Enter Methodology"
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
