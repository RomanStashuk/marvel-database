import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../img/logo.svg';

const AppHeader = ({ className }) => {
  return (
    <header className={className}>
      <h1 className="visually-hidden">
        Marvel Comics Database is an app full of characters (like Spider-Man,
        Wolverine, Iron Man, and the Hulk) and comic books.
      </h1>
      <Navbar className="p-2" expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            className="ff-secondary fw-bold fs-4 text-uppercase"
          >
            <img
              alt="Marvel logo"
              src={logo}
              width="100"
              height="40"
              className="d-inline-block align-middle me-2"
            />
            {'Database'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto mt-3 mt-md-0 ff-secondary text-uppercase fw-bold"
              variant="underline"
            >
              <Nav.Link href="#home" className="link-primary">
                Characters
              </Nav.Link>
              <Nav.Link href="#link" className="link-primary">
                Comics
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
