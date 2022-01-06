import Navigation from "../comps/Navigation"
import Footer from "../comps/Footer"
import { Card, Container, Row, Col} from "react-bootstrap";

function About() {
    return (
        <>
        <Navigation />
        <br />
        <br />
        <br />
        <h1>About Page</h1>
        <Container>
            <Row>
            <Col>
            <Card>
                <Card.Img variant='top' href=""/>
                <Card.Title>Shawn</Card.Title>
                <Card.Text>A bit about Shawn</Card.Text>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" href="" />
                <Card.Title>Alex</Card.Title>
                <Card.Text>A bit about Alex</Card.Text>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant='top' href='' />
                <Card.Title>Rison</Card.Title>
                <Card.Text>A bit about Rison</Card.Text>
            </Card>
            </Col>
            </Row>
            <Row>
            <Card>
                A bit about the project as a whole (Features/challenges/growth areas)
            </Card>
            </Row>
        </Container>
        <Footer />
        </>
    );
}
export default About