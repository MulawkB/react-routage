import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router";
import "../styles/Header.css";
import { useMatch } from "react-router";

function Header() {
  const match = useMatch("/category/:query");
  return (
    <>
      <header>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Nav className="ms-auto">
              {match ? <Navbar >Catégorie : {match.params.query} </Navbar> : ""}
              <Nav.Link to="/" as={NavLink}>
                Accueil
              </Nav.Link>
              <Nav.Link to="/category/vetements" as={NavLink}>
                Vêtements
              </Nav.Link>
              <Nav.Link to="/category/chaussures" as={NavLink}>
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
