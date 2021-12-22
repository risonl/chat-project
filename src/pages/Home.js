import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Navigation from "../comps/Navigation";
import { Container, Col, Row,} from "react-bootstrap";
import Marquee from "../comps/Marquee";

export function Home() {
    return (
        <>
<<<<<<< HEAD
        <Navigation />  
        <br />
        <br />
        <br />
        <Marquee />
=======
        <Navigation />
        <Container fluid className="headImage">
            
        </Container>
        <Container className='intro'>
            <Row>
                <Col><h1>Hello</h1></Col>
            </Row>
            <Row>
                <Col>
                    <p>Welcome to our page. This is a chat designed all around movies. We hope you join in on the conversation and enjoy your time here!</p>
                </Col>
            </Row>
        </Container>
            
        <Container className='homeCC'>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant='top' href=""/>
                        <Card.Title>General</Card.Title>
                        <Card.Text>General chat discussing your favorite/least favorite movies ect.</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top' href=""/>
                        <Card.Title>Cinematography</Card.Title>
                        <Card.Text>All about Cinematography </Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top' href=""/>
                        <Card.Title>Plot</Card.Title>
                        <Card.Text>All about great movie plots</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top' href=""/>
                        <Card.Title>Directors</Card.Title>
                        <Card.Text>A chat about all of the great directors out there</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
>>>>>>> cfa14cd51d397f2b7d3209083c8a63697194bb0f
        
        </>
    );
}
export default Home