import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navbars() {
  return (
    <Nav
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
            <Nav.Link href="/">Promo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">Program</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Nav>
  );
}

export default Navbars;
