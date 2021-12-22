import { Navbar , Container, Nav} from "react-bootstrap"

function Navigation() {
    return (
    <>
    <Container>
    <Navbar fixed="top" bg="primary" variant="dark">
<<<<<<< HEAD
        
            <Nav classname="me-auto">
=======
        <Container>
            <Nav className="me-auto">
>>>>>>> cfa14cd51d397f2b7d3209083c8a63697194bb0f
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        
    </Navbar>
    </Container>
    </>
    )
}

export default Navigation