import { Navbar , Container, Nav} from "react-bootstrap"

function Navigation() {
    return (
    <>
    <Navbar fixed="top" bg="primary" variant="dark">
        <Container>
            <Nav classname="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
    )
}

export default Navigation