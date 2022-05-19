import BootstrapTable from "react-bootstrap-table-next";
import { Container } from "react-bootstrap";
import ToolkitProvider, {
  ColumnToggle
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const Table = ({ data }) => {
  const { ToggleList } = ColumnToggle;

  const columns = [
    {
      dataField: "_id",
      text: "ID",
      sort: true
    },
    {
      dataField: "title",
      text: "Title",
      sort: true
    },
    {
      dataField: "volume",
      text: "Volume",
      sort: true
    },
    {
      dataField: "DOI",
      text: "DOI",
      sort: true
    },
    {
      dataField: "journal",
      text: "Jorunal",
      sort: true
    },
    {
      dataField: "methodology",
      text: "Methodology",
      sort: true
    },
    {
      dataField: "numberOfPages",
      text: "Number of Pages",
      sort: true
    },
    {
      dataField: "claims",
      text: "Claims",
      sort: true
    },
    {
      dataField: "authors",
      text: "Authors",
      sort: true
    },
    {
      dataField: "evidence",
      text: "Evidence",
      sort: true
    },
    {
      dataField: "year",
      text: "Year",
      sort: true
    }
  ];

  return (
    <Container>
      <hr />
      <ToolkitProvider keyField="id" data={data} columns={columns} columnToggle>
        {(props) => (
          <div>
            <ToggleList {...props.columnToggleProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default Table;
