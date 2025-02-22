import Footer from "../compounts/Footer";
import Navbar1 from "../compounts/Navbar";
import image from "../images/project-details-large (1).jpg";
import image1 from "../images/project-details-small.jpg";

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
            <div className="container privacycon">
                <div className="row mt-5" >
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="container privacycon" style={{ marginTop: '30px', padding: '20px' }}>
                <div className="row">
                    <div className="col">
                        <p className="pa">Are you looking for ways to grow the user base for your mobile application? Then you have arrived at the right place. Here you will find a curated collection of landing page HTML templates that will help you build an engaging online presentation for your mobile app and convince visitors to become loyal paying users.</p>
                        <p className="pa">All templates in the roundup are premium which means you need to pay for them but we're talking small amounts of money which won't break your bank account but will help authors make a living. In return you get a high quality, updated item together with high quality and very prompt technical support.</p>
                    </div>
                </div>
            </div>
            <div className="container privacycon" style={{ padding: '20px' }}>
                <div className="row">
                    <div className="col">
                        <h3>Advantages of working with this template</h3>
                        <p className="pa">Besides buying the template you need some basic web skills in order to customize it. Nothing too fancy HTML/CSS will do just fine and a little bit of image editing. You can always hire a web designer to help with the customization work while you provide the template and the content that is the most important.</p>
                        <p className="pa">Riga is a landing page HTML template made with Bootstrap to help you showcase your mobile app online and persuade visitors to download it from the app stores. The author used Bootstrap to build the template and integrated a nice animated navigation that slides from outside the screen.</p>
                    </div>
                </div>
            </div>
            <div className="container privacycon" style={{ padding: '20px' }}>
                <div className="row">
                    <div className="col">
                        <p className="pa">Features include an eye catching morphtext in the header, details lightbox for more details information, statistics numbers for important values, card slider for testimonials, image slider for customer logos and working forms that will enable your landing page to provide leads in order to achieve your marketing goals.</p>
                    </div>
                </div>
            </div>
            <div className="container privacycon">
                <div className="row mt-2" >
                    <h3>New elements added to the package</h3>
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="container privacycon" style={{ marginTop: '30px', padding: '20px' }}>
                <div className="row">
                    <div className="col">
                        <p className="pa">Some useful extra pages are bundled with the template lik article details, terms conditions and privacy policy which can be customized as per your requirements. Riga has an impactful dark style design combined with warm colors and angular background shapes with the unique goal of making your mobile app stand out.</p>
                        <p className="pa">Leon is an easy to customize landing page HTML template built with Bootstrap for promoting mobile apps to the online audience and making visitors download them from app stores. This template is built with HTML, CSS and Bootstrap to ensure the highest flexibility for all users.</p>
                    </div>
                </div>
            </div>
            <div className="container privacycon" style={{ backgroundColor: '#f5f1f1', marginTop: '10px', padding: '20px' }}>
                <div className="row">
                    <div className="col">
                        <h3>Visitors love a beautiful and efficient website</h3>
                        <p className="pa">All designers, developers and tech-savvy people will be able to customize this template with basic web coding skills. Among the features you will find details lightbox for more details information, tabbed content for feature details, video lightbox, card slider for testimonials, statistics numbers, image slider for customer logos, dropdown navigation and useful extra pages for article details, terms.</p>
                    </div>
                </div>
            </div>
            <div className="container privacycon mt-4" style={{ padding: '20px' }}>
                <div className="row">
                    <div className="col">
                        <p className="pa">Together with touches of call to action green, the overall landing page design will showcase your app beautifully and will help with convincing visitors to download it from the app stores. Orange and gray hues with one color backgrounds to maximize the impact of your content image slider for customer logos and working forms.</p>
                        <ul>
                            <li className="pa" style={{ marginBottom: '7px' }}><span style={{ fontWeight: '600' }}>Card slider</span> for testimonials, statistics numbers for important values image slider for logos</li>
                            <li className="pa" style={{ marginBottom: '7px' }}><span style={{ fontWeight: '600' }}>Dropdown navigation</span> and useful extra pages for article details, terms conditions and privacy policy</li>
                            <li className="pa" style={{ marginBottom: '7px' }}><span style={{ fontWeight: '600' }}>Clean light design</span> mixing purple, orange and gray hues with one color backgrounds to maximize</li>
                            <li className="pa" style={{ marginBottom: '7px' }}><span style={{ fontWeight: '600' }}>Together with</span> touches of call to action green, the overall landing page design will showcase your app</li>
                            <li className="pa" style={{ marginBottom: '7px' }}><span style={{ fontWeight: '600' }}>This template</span> is built with HTML, CSS and Bootstrap to ensure the highest flexibility for all users</li>
                        </ul>
                        <button className="mt-4 mb-5 backbtn">Back</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Project;