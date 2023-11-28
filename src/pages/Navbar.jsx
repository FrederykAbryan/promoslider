import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  return (
    <Navbar
      fill
      variant="tabs"
      style={{ minWidth: "100%" }}
      expand="lg"
      bg="blue"
      className="bg-body-tertiary"
    >
      <Container>
        <Nav fill variant="tabs" activeKey={location.pathname} className="me-auto">
          <Nav.Item>
            <Nav.Link href="/promo">Promo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/program">Program</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Navbars;
