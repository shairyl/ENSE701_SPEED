import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import AnalystForm from "../components/analystForm";
const Analyst = () => {
  const [titles, setTitles] = useState([]);
  const [analystForm, setanalystForm] = useState();
  const [currentdata, setCurrentdata] = useState();
  const [evidence, setEvidence] = useState();
  const [research, setResearch] = useState();
  const [participants, setParticipants] = useState();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  function insertForm(data) {
    setCurrentdata(data);
    setanalystForm(
      <AnalystForm
        data={data}
        setEvidence={setEvidence}
        setResearch={setResearch}
        setParticipants={setParticipants}
      />
    );
  }

  const deleteEntry = async () => {
    try {
      //add current id in query
      await axios.delete(`/api/speed/analyst/?id=${currentdata._id}`);

      fetchSubmissions();
      setanalystForm();
    } catch (err) {
      console.log(err);
    }
  };

  const newEntry = async () => {
    try {
      currentdata.evidence = evidence;
      currentdata.typeOfResearch = research;
      currentdata.typeOfParticipants = participants;
      await axios.post("/api/speed/speed", currentdata);
      fetchSubmissions();
      setanalystForm();
      deleteEntry();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSubmissions = async () => {
    const response = await axios.get("/api/speed/analyst");
    //loop through response
    let tempTitles = [];

    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].title !== "") {
        tempTitles.push(
          <ListGroupItem
            action
            onClick={() => {
              insertForm(response.data[i]);
            }}
          >
            {response.data[i].title}
          </ListGroupItem>
        );
      }
    }
    setTitles(tempTitles);
  };

  return (
    <Container>
      <h3>Submissions:</h3>
      <ListGroup defaultActiveKey="#link1">{titles}</ListGroup>
      <hr />
      <h3>More Details</h3>
      {analystForm}
      <Button variant="primary" type="submit" onClick={deleteEntry}>
        Delete
      </Button>
      <hr />
      <Button variant="primary" type="submit" onClick={newEntry}>
        Accept
      </Button>
    </Container>
  );
};

export default Analyst;
