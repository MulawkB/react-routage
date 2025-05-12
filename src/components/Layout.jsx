import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";


function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container className="ms-6">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
