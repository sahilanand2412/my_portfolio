import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.jpg"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import cplus from "../assets/C++.png"
import c from "../assets/C.png"
import java from "../assets/java.png"
import dsa from "../assets/dsa.png"
import linux from "../assets/linux.png"
import python from "../assets/python.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"
import android from "../assets/android.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills" >
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h5>Skills</h5>
              <p>
              "As a passionate full stack developer and UI/UX specialist, I create dynamic web experiences by blending aesthetic design with robust functionality. My expertise ensures high-performance, responsive, and scalable applications. Committed to continuous learning and effective collaboration, I deliver bespoke solutions that exceed client expectations and elevate user satisfaction."              </p>
              <Carousel responsive={responsive}  infinite={true} className="skill-slider">
              <div className="item" >
                  <img src={java} alt ="Image" className="img-size"/>
                  <h2>Java</h2>
                </div>
              <div className="item" >
                  <img src={cplus} alt ="Image" className="img-size"/>
                  <h2>c++</h2>
                </div>               
                <div className="item" >
                  <img src={html} alt ="Image" className="img-size"/>
                  <h2>HTML</h2>
                </div>
                <div className="item" >
                  <img src={css} alt ="Image"className="img-size" />
                  <h2>CSS</h2>
                </div>
                <div className="item" >
                  <img src={javascript} alt ="Image" className="img-size"/>
                  <h2>Javascript</h2>
                </div>
                <div className="item" >
                  <img src={react} alt ="Image" className="img-size"/>
                  <h2>React</h2>
                </div>
                <div className="item" >
                  <img src={c}  alt ="Image" className="img-size"/>
                  <h2>C</h2>
                </div>
                <div className="item" >
                  <img src={python} alt ="Image" className="img-size"/>
                  <h2>Python</h2>
                </div>
                <div className="item" >
                  <img src={tailwind} alt ="Image" className="img-size"/>
                  <h2>tailwind</h2>
                </div>
                <div className="item" >
                  <img src={linux} alt ="Image" className="img-size"/>
                  <h2>Linux</h2>
                </div>
                <div className="item" >
                  <img src={dsa} alt ="Image" className="img-size"/>
                  <h2>DSA</h2>
                </div>
                <div className="item" >
                  <img src={mongodb} alt ="Image" className="img-size"/>
                  <h2>MongoDB</h2>
                </div>
                <div className="item" >
                  <img src={mysql} alt ="Image" className="img-size"/>
                  <h2>MYSQL</h2>
                </div>
                <div className="item" >
                  <img src={android} alt ="Image" className="img-size"/>
                  <h2>Android</h2>
                </div>
                
                
              </Carousel>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
