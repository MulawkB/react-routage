import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router";

function Header() {
  return (
    <>
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link to="/" as={Link}>
              Accueil
            </Nav.Link>
            <Nav.Link to="/category/vetements" as={Link}>
              Vêtements
            </Nav.Link>
            <Nav.Link to="/category/chaussures" as={Link}>
              Chaussures
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
    </>
  );
}
export default Header;
