import React, { useState } from "react";
import {
  Container,
  Row,
  Form,
  Button,
  Alert,
  Col,
  Stack
} from "react-bootstrap";
import axios from "axios";

const Search = () => {
  const [claims, setClaims] = useState("");
  const [method, setMethodology] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      "/api/speed/speed" + `?claims=${claims}&methodology=${method}`
    );

    console.log("response: ", response);
  };

  return (
    <Container>
      <Row>
        <Stack>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Claims</Form.Label>
            <Form.Control
              className="me-auto"
              as="select"
              onChange={(e) => setClaims(e.target.value)}
            >
              <option>Select Claims</option>
              <option>test</option>
              <option>Claims 2</option>
              <option>Claims 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Methodology</Form.Label>
            <Form.Control
              className="me-auto"
              as="select"
              onChange={(e) => setMethodology(e.target.value)}
            >
              <option>Select Methodology</option>
              <option>test</option>
              <option>Methodology 2</option>
              <option>Methodology 3</option>
            </Form.Control>
          </Form.Group>
          <div className="vr" />
          <Button variant="secondary" onClick={fetchData}>
            Submit
          </Button>
          <div className="vr" />
          <Button variant="outline-danger">Reset</Button>
        </Stack>
      </Row>
    </Container>
  );
};

export default Search;
