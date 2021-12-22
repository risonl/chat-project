import { Container, Row, Col} from "react-bootstrap";

function Chat() {
    return (
        <>
        <Container>
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
        </Container>
        </>
    );
}
export default Chat