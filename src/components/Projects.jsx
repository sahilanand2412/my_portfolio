import { Col, Container, Row ,Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import css from "../assets/css.png"
import html from "../assets/html.png"
import { Nav } from "react-bootstrap";
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
            <p>vxhjnv judvdn nxkfb bfjkadhzbjjkhcbdgkj </p>
            <Tab.Container id= "projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
              <Nav.Item>
                <Nav.Link eventKey="first">Tab1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Tab3
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
                <Tab.Pane eventKey="second"> second tab</Tab.Pane>
                <Tab.Pane eventKey="second"> second tab</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="backgroud-image-right" src={''}></img> */}
    </section>
  );
};
