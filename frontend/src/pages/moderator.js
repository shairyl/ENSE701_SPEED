import React from "react";
import { Container, Row} from "react-bootstrap";
//import articles from "articles";
//import submissions from '../../models/submissions';

const submissions = require("../../models/submissions");

const moderator = () => {

  const author = submissions.authors;
  const title = submissions.title;
  const journal = submissions.journal;
  const year = submissions.year;
  const volume = submissions.volume;
  const numberOfPages = submissions.pages;
  const DOI = submissions.DOI;
  const claims = submissions.claims;
  const methodology = submissions.methodology;

    return (
        <Container>
            <Row>
                <h2> Moderator's Page</h2>
                <table>
                    <tr>
                        <th scope="row"></th>
                        <th>Title  :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>Author  :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>Journal  :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>Year  :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>Volume  :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>Pages  :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>DOI  :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>Claims        :</th>
                        <td>{"test"}</td>
                        <hr>
                        </hr>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <th>Methodology   : </th>
                        <td>{"  test"}</td>
                        <hr>
                        </hr>
                        <hr>
                        </hr>
                    </tr>
                </table>

                <div>
                    <button>Accept</button>
                    <button>Reject</button>
                </div>
        
            </Row>
        </Container>
        
    );
};
export default moderator;