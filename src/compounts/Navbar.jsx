import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import myImage from '../images/logo.svg';
import { Link } from 'react-router';
const Navbar1 = () => {
  return (
    <Navbar expand="lg" className='navbar'>
      <Navbar.Brand href="#home" className='navheading'><img style={{ width: '130px', marginBottom: '5px' }} src={myImage} alt='logo' /></Navbar.Brand>
      <Navbar.Toggle className='toggle' style={{ backgroundColor: 'white',width:'50px',height:'40px' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link className='links'>
            <Link to="/" className='text-white text-decoration-none'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className='links'>
            <Link to="/About" className='text-white text-decoration-none'>
              About
            </Link>
          </Nav.Link>
          <Nav.Link className='links'>
            <Link to="/Service" className='text-white text-decoration-none'>
              Service
            </Link>
          </Nav.Link>
          <NavDropdown
            title="Drop"
            id="basic-nav-dropdown"
            className="custom-dropdown"
          >
            <NavDropdown.Item>
              <Link to="/Project" className='text-decoration-none text-black'>
                Project Details
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Termcond" className='text-decoration-none text-black'>
                Term Conditions
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Privacy" className='text-decoration-none text-black'>
                Privacy Policy
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='links'>
            <Link to="/Contact" className='text-white text-decoration-none'>
              Contact
            </Link>
          </Nav.Link>
          <div className='d-flex gap-2'>
            <Nav.Link><i class="bi bi-facebook" style={{ color: 'white', fontSize: '20px' }}></i></Nav.Link>
            <Nav.Link><i class="bi bi-instagram" style={{ color: 'white', fontSize: '20px' }}></i></Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


  )
}
export default Navbar1;