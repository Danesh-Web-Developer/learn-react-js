const Service = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container servicemid">
                    <h2 className="text-center">Offered services</h2>
                    <p className="text-center mb-5">Web design and development have been my bread and butter for more than 5 years. During <br />time I've discovered that I can help startups and companies with the following services</p>
                    <div className="row abc">
                        <div className="col-lg-4 col-12 mb-4 designdiv">
                            <i class="bi bi-gem" style={{ color: 'blue', fontSize: '70px' }}></i>
                            <h4 style={{ fontWeight: '600', marginTop: '20px' }}>DESIGN</h4>
                            <p>
                                Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth
                            </p>
                        </div>
                        <div className="col-lg-4 col-12 mb-4 ml-5 designdiv">
                            <i class="bi bi-code-slash" style={{ color: 'blue', fontSize: '70px' }}></i>
                            <h4 style={{ fontWeight: '600', marginTop: '20px' }}>DEVELOPMENT</h4>
                            <p>
                                I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability
                            </p>
                        </div>
                        <div className="col-lg-4 col-12 mb-4 designdiv">
                            <i class="bi bi-tv" style={{ color: 'blue', fontSize: '70px' }}></i>
                            <h4 style={{ fontWeight: '600', marginTop: '20px' }}>BASIC SEO</h4>
                            <p>
                                i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;