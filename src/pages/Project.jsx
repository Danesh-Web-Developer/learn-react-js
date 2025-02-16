import Navbar1 from "../compounts/Navbar";
const Project = () => {
    return (
       <div>
        <Navbar1 />
        <div className="container-fluid" style={{ height: '180px', backgroundColor: '#242323e5', color: 'white', display: 'flex', alignItems: 'center' }}>
                <div className="container privacycon">
                    <div className="row" >
                        <div className="col" >
                            <h1>Project Details</h1>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Project;