import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <Navbar 
    expand="lg"
    style={{
      // minHeight: "2rem",
      fontSize: "2rem",
    }} 
    className="bg-body-tertiary mb-20"
    >
      <Container>
        <Navbar.Brand href="/">E.A.P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={location.pathname} className="me-auto">
            <Nav.Link href="/promo">Promo</Nav.Link>
            <Nav.Link href="/program">Program</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
