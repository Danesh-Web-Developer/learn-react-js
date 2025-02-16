

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white pt-4" >
                <div className="container" >
                    <div className="row" style={{ height: '40vh', textAlign: 'center' }}>
                        <div className="col">
                            <div className="mt-5">
                                <i class="bi bi-facebook" style={{ fontSize: '35px', }}></i>
                                <i class="bi bi-twitter" style={{ fontSize: '35px', marginLeft: '13px' }}></i>
                                <i class="bi bi-pinterest" style={{ fontSize: '35px', marginLeft: '13px' }}></i>
                                <i class="bi bi-instagram" style={{ fontSize: '35px', marginLeft: '13px' }}></i>
                                <i class="bi bi-youtube" style={{ fontSize: '35px', marginLeft: '13px' }}></i>
                            </div>
                            <div className="mt-5">
                                <p>Copyright © Your name</p>
                                <p>Distributed By Themewagon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;