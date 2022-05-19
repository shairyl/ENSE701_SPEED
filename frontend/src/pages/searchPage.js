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
  const [resultTable, setResultTable] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "/api/speed/speed" + `?claims=${claims}&methodology=${method}`
      );
      setTable(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const setTable = (data) => {
    //create bootstrap table based on json data
    setResultTable(
      <div>
        <h3>Results</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Authors</th>
              <th scope="col">Journal</th>
              <th scope="col">Year</th>
              <th scope="col">Volume</th>
              <th scope="col">Number of Pages</th>
              <th scope="col">DOI</th>
              <th scope="col">Claims</th>
              <th scope="col">Methodology</th>
              <th scope="col">Evidence</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.authors}</td>
                <td>{item.journal}</td>
                <td>{item.year}</td>
                <td>{item.volume}</td>
                <td>{item.numberOfPages}</td>
                <td>{item.DOI}</td>
                <td>{item.claims}</td>
                <td>{item.methodology}</td>
                <td>{item.evidence}</td>
                <td>{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
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
      {resultTable}
    </Container>
  );
};

export default Search;
