import { Container } from "react-bootstrap";
function Hero() {

  return (
    <div className="hero">
      <Container>
        <div className="h1div">
          <h1 className="h1">
            I love to create beautiful and efficient websites
          </h1>
        </div>
        <button className="discoverbtn">Discover</button>
        <button className="contactbtn"><i class="bi bi-person-fill"></i> Contact Me</button>
      </Container>
    </div>
  );
}

export default Hero;