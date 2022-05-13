import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <h2> Submitter's Page</h2>

        {/* create a bootstrap form  withe fields author, year of publication, volume, number of pages, DOI field, claims, methodology */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter Author" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year of Publication</Form.Label>
            <Form.Control type="text" placeholder="Enter Year of Publication" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Volume</Form.Label>
            <Form.Control type="text" placeholder="Enter Volume" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Pages</Form.Label>
            <Form.Control type="text" placeholder="Enter Number of Pages" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DOI</Form.Label>
            <Form.Control type="text" placeholder="Enter DOI" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Claims</Form.Label>
            <Form.Control type="text" placeholder="Enter Claims" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Methodology</Form.Label>
            <Form.Control type="text" placeholder="Enter Methodology" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Home;
