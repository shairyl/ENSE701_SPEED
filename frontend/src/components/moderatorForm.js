import { Row, Form } from "react-bootstrap";
const ModeratorForm = ({ data , setComment}) => {
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
          <Form.Label>Name of Submitter</Form.Label>
          <Form.Control
            type="text"
            value={data.name}
            placeholder="Full Name"
            aria-label="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email of Submitter</Form.Label>
          <Form.Control
            type="text"
            value={data.email}
            placeholder="Email"
            aria-label="Email"
          />
        </Form.Group>

        <h3>Comment:</h3>
        <Form.Group className="mb-3">
            <Form.Control
              type="text"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter Comment"
              aria-label="comment"
            />
        </Form.Group>
      </Form>
    </Row>
  );
};

export default ModeratorForm;
