import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({isActive}) =>
                 isActive ? "selected" : "nav-link"
                }
              >
                Accueil
              </NavLink>
              <NavLink
                to="/category/vetements"
                className={({isActive}) =>
                 isActive ? "selected" : "nav-link"
                }
              >
                Vêtements
              </NavLink>
              <NavLink
                to="/category/chaussures"
                className={({isActive}) =>
                 isActive ? "selected" : "nav-link"
                }
              >
                Chaussures
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
export default Header;
