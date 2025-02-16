import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Contact = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container contactmid">
                    <div className="row" >
                        <div className="col">
                            <h2 className="text-center">Contact details</h2>
                            <p className="text-center mb-5">For any type of online project please don't hesitate to get in touch with me. The fastest way is to<br />send me your message using the following email contact@domain.com</p>

                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control style={{padding:'13px'}} type="text" placeholder='Name'/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control style={{padding:'13px'}} type="email" placeholder='Email'/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={7} placeholder='Project details'/>
                                </Form.Group>
                                <Button style={{padding:'13px',width:'100%',borderRadius:'30px'}} >Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;