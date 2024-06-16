
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import img from "../assets/img1.jpg"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailLock } from "react-icons/md";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shristi-priya/"><CiLinkedin /></a>
              {/* <a href="#"><MdOutlineMailLock /></a> */}
              <a href="https://github.com/shristipriya1207"><FaGithub /></a>
            </div>
            <p>Copyright 2024. Shristi Priya</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
