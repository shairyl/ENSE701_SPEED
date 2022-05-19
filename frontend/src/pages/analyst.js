import React, { useState } from "react";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const Analyst = () => {
    // state variables for form fields
    const [information, setInformation] = useState("");
    const [alertMsg, setalertMsg] = useState("");
    // checks if form fields are empty and if year and pages and volumes are numbers
    const validateForm = () => {
        return (
            information.length > 0
        );
    };

    const publishData = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = {
                information
            };
            console.log("data: ", data);
            try {
                const response = await axios.post("/api/speed/analyst", data);
                // provide a success message to the user without alert
                setalertMsg(
                    <Alert variant="success">
                        <Alert.Heading>Information successfully uploaded!</Alert.Heading>
                        <p>The users will now be able to see this article!</p>
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
                "Please fill out information for this article"
            );
        }
    };

    return (
        <Container>
            <Row>
                <h2> Analyst's Page</h2>
                {/* Display alert message */}
                {alertMsg}
                {/* create a bootstrap form  with field for information input */}
                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Article Information</Form.Label>
                        <Form.Control
                            onChange={(e) => setInformation(e.target.value)}
                            type="text"
                            placeholder="Enter Article Information"
                            aria-label="Information"
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={publishData} type="publish">
                        Publish
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};

export default Analyst;