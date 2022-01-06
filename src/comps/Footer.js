import { Navbar , Container, Nav} from "react-bootstrap"
import "./footer.css"

function Footer() {
    return (
    <>
    <Navbar fixed="bottom" bg="info" variant="dark" className="footer">
        <Container>
            <Nav className="me-auto"> 
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/select">Ticket Booth</Nav.Link>
            <Nav.Link href="/chat">Chatrooms</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
    )
}

export default Footer