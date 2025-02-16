import psimage from '../images/details-icon-photoshop.png'
import aiimage from '../images/details-icon-illustrator.png'
import htmlimage from '../images/details-icon-html.png'
import cssimage from '../images/details-icon-css.png'
import bootimage from '../images/details-icon-bootstrap.png'
import jsimage from '../images/details-icon-javascript.png'
const Works = () => {
    return (
        <>
            <div>
                <div className="div23" >
                    <div className="col-lg-6 col-12 img"></div>
                    <div className="col-lg-6 col-12 worksdiv">
                        <h2>Why Work With Me</h2>
                        <p className="mb-5">I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
                        <h5>DESIGN TOOLS</h5>
                        <p className="mb-5">My favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too</p>
                        <h5>DEVELOPMENT SKILLS</h5>
                        <p className="mb-5">I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks</p>
                        <div className="iconscontainer">
                            <img style={{ width: '50px', marginLeft: '10px' }} src={htmlimage} alt="" />
                            <img style={{ width: '50px', marginLeft: '10px' }} src={cssimage} alt="" />
                            <img style={{ width: '50px', marginLeft: '10px' }} src={bootimage} alt="" />
                            <img style={{ width: '50px', marginLeft: '10px' }} src={jsimage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Works;