    import Navigation from "../comps/Navigation"
    import Footer from "../comps/Footer"
    import ColorPicker from "../comps/Picker"
    import { Card, Button } from "react-bootstrap"

function Select () {
    return (
        <>
        <Navigation/>
        <br/>
        <br/>
        <Card>
        <Card.Body> Using the following color pickers, you can change your chatboxes and text color.
            Remember, this will only change the color for you. Everyone else will still see 
            the default chatbox color.<h1>Text</h1><ColorPicker/><Button variant="secondary">Save</Button>{' '}<h1>Chatbox</h1><ColorPicker/><Button variant="secondary">Save</Button>{' '}</Card.Body>
        </Card>
        <Footer/>
</>
    )
    }

    export default Select