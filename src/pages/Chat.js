import { Container, Row, Col} from "react-bootstrap";
import Navigation from "../comps/Navigation"
import Footer from "../comps/Footer"
import "./chat.css"

function Chat() {
    return (
        <>
        <Container>
            <Navigation />
        <Row><h1>This is the Chatroom</h1></Row>
            <Row>
                <Col></Col>
            <Col><div className="chatBox"></div></Col>
            <Col></Col>
            </Row>
            <Row>
            <Col></Col>
            <Col>
                <input type="text" size='70'></input>
            </Col>
            <Col></Col>
            </Row>
            <Footer />
        </Container>
        </>
    );
}
export default Chat