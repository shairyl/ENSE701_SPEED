import { Row, Form } from "react-bootstrap";
const AnalystForm = ({ data, setEvidence, setResearch, setParticipants }) => {
  return (
    <Row>
      {/* create a bootstrap form  withe fields author, year of publication, volume, number of pages, DOI field, claims, methodology */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={data.title}
            placeholder="Enter Title"
            aria-label="Title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Jorunal</Form.Label>
          <Form.Control
            type="text"
            value={data.journal}
            placeholder="Enter Journal"
            aria-label="Journal"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={data.authors}
            placeholder="Enter Author"
            aria-label="Author"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year of Publication</Form.Label>
          <Form.Control
            type="text"
            value={data.year}
            placeholder="Enter Year of Publication"
            aria-label="Year of Publication"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Volume</Form.Label>
          <Form.Control
            type="text"
            value={data.volume}
            placeholder="Enter Volume"
            aria-label="Volume"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Pages</Form.Label>
          <Form.Control
            type="text"
            value={data.numberOfPages}
            placeholder="Enter Number of Pages"
            aria-label="Number of Pages"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>DOI</Form.Label>
          <Form.Control
            type="text"
            value={data.DOI}
            placeholder="Enter DOI"
            aria-label="DOI"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Claims</Form.Label>
          <Form.Control
            type="text"
            value={data.claims}
            placeholder="Enter Claims"
            aria-label="Claims"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Methodology</Form.Label>
          <Form.Control
            type="text"
            value={data.methodology}
            placeholder="Enter Methodology"
            aria-label="Methodology"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Evidence</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Methodology"
            aria-label="Methodology"
            onChange={(e) => setEvidence(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Type of Research</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Methodology"
            aria-label="Methodology"
            onChange={(e) => setResearch(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Type of Participants</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Methodology"
            aria-label="Methodology"
            onChange={(e) => setParticipants(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Row>
  );
};

export default AnalystForm;
