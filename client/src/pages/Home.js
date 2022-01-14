import { Col, Container, Image, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Navigation from "../comps/Navigation";
import Footer from "../comps/Footer";
import directorpic from '../comps/assets/directors.jpg';
import cinemapic from '../comps/assets/camera.jpg';
import generalpic from '../comps/assets/generalchat.jpg';
import plotpic from '../comps/assets/plot.jpg';

export function Home() {
    return (
        <>
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

        <Container className="showcase">
            <Row>
                <Col>
                    <Container className="chatpic">
                        <Image src={generalpic} fluid rounded/>
                    </Container>
                </Col>
                <Col>
                    <h1>General Chat</h1>
                    <p>This is our general chat where we discuss every random topic about movies. What movies you love, How a movie mad you feel, movies you thought were terrible, ect.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className="chatpic">
                        <Image src={cinemapic} fluid rounded/>
                    </Container>
                </Col>
                <Col>
                    <h1>Cinematography Chat</h1>
                    <p>This chat is for discussion about the process of shooting movies. Pretty much used for discussing the camera work. Talk about shots you really like in movies. Give advise to one another about different techniques to use.</p>
                </Col>
                <Row>
                <Col>
                    <Container className="chatpic">
                        <Image src={plotpic} fluid rounded/>
                    </Container>
                </Col>
                <Col>
                    <h1>Movie Plot Chat</h1>
                    <p>This chat is for talking about your favorite movie plots. Talk about what aspects you like about different movies, the twists and turns that really mess with your head. Keep conversation related to plot specific points. WARNING POSSIBLE SPOILERS!!!!</p>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Container className="chatpic">
                        <Image src={directorpic} fluid rounded/>
                    </Container>
                </Col>
                <Col>
                    <h1>Directors Chat</h1>
                    <p>This chat is all about directors. Tell us which ones you love/hate, what makes them special, rank their movies, and anything else you can think of. </p>
                </Col>
            </Row>
            </Row>
        </Container>
        <Footer/>
            

        </>
    );
}
export default Home