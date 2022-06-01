import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ListGroup, ListGroupItem, Button, Form } from "react-bootstrap";
import ModeratorForm from "../components/moderatorForm";

const Moderator = () => {
  const [titles, setTitles] = useState([]);
  const [moderatorForm, setModeratorForm] = useState();
  const [currentdata, setCurrentdata] = useState();
  const [comment, setComment] = useState();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  function insertForm(data) {
    setCurrentdata(data);
    setModeratorForm(
      <ModeratorForm 
        data={data} 
        setComment = {setComment}
      />);
  }

  const deleteEntry = async () => {
    try {
      //add current id in query
      await axios.delete(`/api/speed/moderator/?id=${currentdata._id}`);

      fetchSubmissions();
      setModeratorForm();
    } catch (err) {
      console.log(err);
    }
  };

  const newEntry = async () => {
    try {
      await axios.post("/api/speed/analyst", currentdata);
      fetchSubmissions();
      setModeratorForm();
      deleteEntry();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSubmissions = async () => {
    const response = await axios.get("/api/speed/moderator");
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
      {moderatorForm}
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

export default Moderator;
