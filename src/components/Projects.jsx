import { Col, Container, Row ,Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import css from "../assets/css.png"
import html from "../assets/html.png"
import { Nav } from "react-bootstrap";
import Resume from "./Resume";
export const Projects = () => {
  const projects = [
    {
      title: "Business StartUp",
      description: "abc",
      imgUrl: css,
    },
    {
      title: "Business StartUp",
      description: "abc",
      imgUrl: html,
    },
    // {
    //   title: "Business StartUp",
    //   description: "abc",
    //   imgUrl: " ",
    // },
    // {
    //   title: "Business StartUp",
    //   description: "abc",
    //   imgUrl: " ",
    // },
    // {
    //   title: "Business StartUp",
    //   description: "abc",
    //   imgUrl: " ",
    // },
    // {
    //   title: "Business StartUp",
    //   description: "abc",
    //   imgUrl: " ",
    // },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Proficient in developing dynamic, responsive web applications using HTML, CSS, and JavaScript, with expertise in React for seamless user interfaces and PHP for robust server-side logic. Adept at integrating MySQL and MongoDB databases to ensure efficient data management and scalable performance.</p>
            <Tab.Container id= "projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
              <Nav.Item>
                <Nav.Link eventKey="first">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects .map((project,index)=>{
                                return(
                                    <ProjectCard key = {index}
                                    {...project}/>
                                    
                                )
                            })
                        }
                    </Row>

                </Tab.Pane>
                <Tab.Pane eventKey="second"> <Resume/></Tab.Pane>
                <Tab.Pane eventKey="third"> third tab</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="backgroud-image-right" src={''}></img> */}
    </section>
  );
};
