import { Table, Col, Row, Container} from "react-bootstrap"

function Marquee() {
    return (
        <>
       <Container>
        <Table bordered size="lg" className="marquee rounded" class='rounded' responsive>
            <thead>
                <tr>
                    <td><h1>MOVIE CHATROOM</h1></td>
                    <td><h2>USERS</h2></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><h3><a href='/select'>Comedy Chat</a></h3></td>
                    <td><h3>X/10</h3></td>
                </tr>
                <tr>
                    <td><h3><a href='/select'>Drama Chat</a></h3></td>
                    <td><h3>X/10</h3></td>
                </tr>
                <tr>
                    <td><h3><a href='/select'>Action Chat</a></h3></td>
                    <td><h3>X/10</h3></td>
                </tr>
                <tr>
                    <td><h3><a href='/select'>Musical Chat</a></h3></td>
                    <td><h3>X/10</h3></td>
                </tr>
                <tr>
                    <td><h3><a href='/select'>Foreign Chat</a></h3></td>
                    <td><h3>X/10</h3></td>
                </tr>
            </tbody>
        </Table>
        </Container>
        </>
    )
}

export default Marquee