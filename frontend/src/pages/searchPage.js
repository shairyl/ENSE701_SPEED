import React, { useEffect, useState } from "react";
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
import Table from "../components/table";

const Search = () => {
  const [claims, setClaims] = useState("");
  const [method, setMethodology] = useState("");
  const [resultTable, setResultTable] = useState("");
  const [search, setSearch] = useState("");
  const [claimField, setClaimsField] = useState("");
  const [methodField, setMethodField] = useState("");

  useEffect(() => {
    fetchClaimsandMethodology();
  }, []);

  const fetchClaimsandMethodology = async () => {
    const response2 = await axios.get("/api/speed/speed/fields");

    //loop through array and pick out unique claims and methodologies
    let claims = [];

    let methods = [];

    response2.data.forEach((element) => {
      if (!claims.includes(element.claims)) {
        claims.push(element.claims);
      }
      if (!method.includes(element.methodology)) {
        methods.push(element.methodology);
      }
    });
    let tempClaims = [];
    let tempMethods = [];
    for (let i = 0; i < claims.length; i++) {
      tempClaims.push(<option>{claims[i]}</option>);
    }

    for (let i = 0; i < methods.length; i++) {
      tempMethods.push(<option>{methods[i]}</option>);
    }

    setMethodField(tempMethods);
    setClaimsField(tempClaims);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "/api/speed/speed" + `?claims=${claims}&methodology=${method}`
      );
      fetchClaimsandMethodology();
      if (!response.data.length == 0) {
        setResultTable(response.data);
        setSearch(true);
      } else {
        setSearch(false);
      }
    } catch (err) {
      console.log(err);
      setSearch(false);
    }
  };

  return (
    <Container>
      <Row>
        <h2> Search Page</h2>
        <Stack>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Claims</Form.Label>
            <Form.Control
              className="me-auto"
              as="select"
              onChange={(e) => setClaims(e.target.value)}
            >
              <option>Select a claim</option>

              {claimField}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Methodology</Form.Label>
            <Form.Control
              className="me-auto"
              as="select"
              onChange={(e) => setMethodology(e.target.value)}
            >
              <option>Select a methodology</option>
              {methodField}
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
      {/* if search is true */}
      {search ? <Table data={resultTable} /> : <div></div>}
    </Container>
  );
};

export default Search;
