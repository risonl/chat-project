import { Navbar , Container, Nav, NavDropdown} from "react-bootstrap"

// function Navigation() {
//     return (
//     <>
//     <Navbar fixed="top" bg="primary" variant="dark">
//         <Container>
//             <Nav classname="me-auto"> 
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/select">Ticket Booth</Nav.Link>
//             <Nav.Link href="/chat">Chatrooms</Nav.Link>
//             </Nav>
//         </Container>
//     </Navbar>
//     </>
//     )
// }

            function Navigation () {
            
                return (
                    <> 
                    <Navbar fixed="top" bg="info" expand="lg">
            <Container>
                <Navbar.Brand href="/">Chatroom Project</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/select">Ticket Booth</Nav.Link>
                    <NavDropdown title="Chatrooms" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/chat">Our first chatroom</NavDropdown.Item>
                    <NavDropdown.Item href="/">Test Link</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
            </Container>
            </Navbar>
            </>
            )
            }

export default Navigation