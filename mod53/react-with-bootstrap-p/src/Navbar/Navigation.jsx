import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-secondary text-warning">
            <Container>
                <Navbar.Brand href="/" className='fs-1'>Milstone-09 React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fs-6 fw-bold">
                        <Nav.Link href="https://freelancernizamc.github.io/milstone-09/index.html">Home</Nav.Link>
                        <Nav.Link href="#link">Module-54</Nav.Link>
                        <Nav.Link href="#link">Module-55</Nav.Link>
                        <Nav.Link href="#link">Module-56</Nav.Link>
                        <Nav.Link href="#link">Module-57</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Milstone</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Milstone 01
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Milstone 02</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 03
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 04
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 05
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 06
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 07
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 08
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 09
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 10
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 11
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Milstone 12
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;