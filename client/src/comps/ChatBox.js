import {Container, Row, Col, Button} from "react-bootstrap"
import './assets/chat.css'
import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {createMessage, viewChats} from '../actions/chat'
//import { newMessage } from "../store/chatSlice"

export default function ChatBox() {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const messages = useSelector((state) => state.chat)
    let messageMap = messages.map((text, index) => (<div key={index} className="chatMessage">{text.text}</div>))

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createMessage({'text': message.text}))
        
        setMessage("")
    }
    function handleChange(e) {
        e.preventDefault();
        setMessage({
            text: e.target.value
        })
    }

    return (
        <>
        <Container>
        <Row><h1>This is the Chatroom</h1></Row>
            <Row>
                <Col></Col>
            <Col><div className="chatBox">
                {messageMap}
                </div></Col>
            <Col></Col>
            </Row>
            <Row>
            <Col></Col>
            <Col>
                <Row>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    size='70'
                    onChange={handleChange}
                />
                <Button as="input" type='submit'/>
                </form>
                </Row>
            </Col>
            <Col></Col>
            </Row>
        </Container>
        </>
    )
}