import Accordion from 'react-bootstrap/Accordion';
const According = () => {
    return (
        <>
            <div className="container-fluid">
                    <h2 className="text-center" style={{padding:'120px 12px 20px 12px'}}>A few words from people that<br />chose to work with me</h2>
                <div className="container" style={{zIndex:'1',display:'flex',justifyContent:'center'}}>
                    <div className="row" style={{width:'90%'}}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How can contact you and quickly get a quote for my online project?</Accordion.Header>
                                <Accordion.Body>
                                    The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you create designs from the ground up or you are using themes?</Accordion.Header>
                                <Accordion.Body>
                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Will i receive any includes maintenance or warranty after project delivery?</Accordion.Header>
                                <Accordion.Body>
                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>If something goes wrong with the project can i have my money back?</Accordion.Header>
                                <Accordion.Body>
                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What's your preferred method of payment and do yo need an advance?</Accordion.Header>
                                <Accordion.Body>
                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}
export default According;