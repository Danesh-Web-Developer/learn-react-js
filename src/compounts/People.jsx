import  Samaimage  from "../images/testimonial-1.jpg";
import  Johnimage  from "../images/testimonial-2.jpg";
import  Lanaimage  from "../images/testimonial-3.jpg";
const Dummy = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container dummymid">
                    <h2 className="text-center mb-4">A few words from people that<br />chose to work with me</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12 pt-0 pl-4 pr-4 peo">
                            <p className="par mt-3">
                                “Mark is a skilled developer which will do everything possible to deliver the project on time and I really appreciate that”</p>
                                <div className="row">
                                    <div className="col-lg-2 col-md-12 col-12"><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={Samaimage} alt="" /></div>
                                    <div className="col-lg-10 col-md-12 col-12" style={{ lineHeight: '5px' }}>
                                        <p style={{ fontSize: '14px', marginTop: '13px', fontWeight: 'bold' }}>Samantha Bloom</p>
                                        <p style={{ fontSize: '13px' }}>Team Leader - Syncnow</p>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 pt-0 pl-4 pr-4 peo">
                            <p className="par mt-3">“Loved to work with Mark he's such an awesome developer with great attention to details. He also has a great eye for design”</p>
                            <div className="row">
                                <div className="col-lg-2 col-md-12 col-12"><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={Johnimage} alt="" /></div>
                                <div className="col-lg-10 col-md-12 col-12" style={{ lineHeight: '5px' }}>
                                    <p style={{ fontSize: '14px', marginTop: '13px', fontWeight: 'bold' }}>John Rowling</p>
                                    <p style={{ fontSize: '13px' }}>Marketing Manager - Nexlite</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 pt-0 pl-4 pr-4 peo">
                            <p className="par mt-3">“So glad we started working with Mark. We've used many times his design and development skills for our inhouse online projects”</p>
                            <div className="row" style={{display:'flex',alignItems:'center'}}>
                                <div className="col-lg-2 col-md-12 col-12"><img style={{width:'50px',height:'50px',borderRadius:'25px'}} src={Lanaimage} alt="" /></div>
                                <div className="col-lg-10 col-md-12 col-12" style={{ lineHeight: '5px',alignItems:'center !important' }}>
                                    <p style={{ fontSize: '14px', marginTop: '13px', fontWeight: 'bold' }}>Lana Smith</p>
                                    <p style={{ fontSize: '13px' }}>General Manager - Shifter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dummy;