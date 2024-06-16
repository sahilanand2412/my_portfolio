import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRightCircle } from "react-icons/fi";
import img2 from "../assets/profile.jpg";
import { useState, useEffect } from "react";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Full Stack Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);


  const tick =()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText =isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);
    setText(updatedText);
    if(isDeleting){
        setDelta(prevDelta => prevDelta / 2)
    }
    if(!isDeleting && updatedText ===fullText){
        setIsDeleting(true);
        setDelta(period);  
    }
    else if(isDeleting && updatedText ===''){
setIsDeleting(false);
setLoopNum(loopNum+1);
setDelta(500);
    }
}

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm `}<span className="name-css">Shristi Priya </span>  <span className="wrap">{text}</span> {`based in Bihar, India`}
            </h1>
            
            <p>
            I bring a blend of creativity and technical expertise to my work, designing and developing websites that are both aesthetically pleasing and functionally superior
            </p>
            <button className="btn3" onClick={() => console.log("connect")}>
              Lets connect
              <FiArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="block">
            <img src={img2} alt="Header Img"></img>
            
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
