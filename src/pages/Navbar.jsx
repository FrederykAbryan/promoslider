import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <Navbar style={{minWidth:"100%"}} expand="lg" bg="blue" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">E.A.P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={location.pathname} className="me-auto">
            {/* <NavLink to="/"> Promo </NavLink>
            <NavLink to="/about"> Program </NavLink> */}
            <Nav.Link href="/">Promo</Nav.Link>
            <Nav.Link href="/about">Program</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;