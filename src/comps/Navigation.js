import { Navbar , Container, Nav} from "react-bootstrap"

function Navigation() {
    return (
    <>
    <Container>
    <Navbar fixed="top" bg="primary" variant="dark">
        
            <Nav classname="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        
    </Navbar>
    </Container>
    </>
    )
}

export default Navigation