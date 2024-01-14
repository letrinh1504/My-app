import "./App.scss";
import TableUsers from "./Components/TableUsers";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import { Row } from "react-bootstrap";

function App() {
  return (
    <div className="app-container">
      <Container>
          <Header />
          <TableUsers />
      </Container>

    </div>
  );
}

export default App;
