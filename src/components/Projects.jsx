import { Col, Container, Row ,Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import { Nav } from "react-bootstrap";
import Resume from "./Resume";
import clone from "../assets/clone.jpg"
import hotel from "../assets/hotel.png"
import quiz from "../assets/ECM.jpg"
import todo from "../assets/amazon.jpg"
import rock from "../assets/rock.png"



export const Projects = () => {
  const projects = [
    {
      title: "Tomato Food Delivery ",
      description: "Developed a food delivery website using React, featuring a dynamic food cart, an admin panel for product management, and seamless user interactions.",
      imgUrl: clone,
      Sourse:"https://github.com/sahilanand2412/Tomato_Food_Delivery",
      output:""
    },
    {
      title: "Amazon Clone",
      description: "Built an Amazon clone using HTML and CSS, replicating the layout and design of the e-commerce platform to enhance UI development skills",
      imgUrl: todo,
      Sourse:"https://github.com/sahilanand2412/amazonClone",
      output:""
    },
    {
      title: "Hotel Management",
      description: " I implemented a comprehensive hotel booking system using HTML, CSS, and JavaScript, ensuring a seamless user experience.",
      imgUrl: hotel,
      Sourse:"https://github.com/sahilanand2412/hotelManagementSystem",
      output:""
    },
    {
      title: "Java quiz",
      description: "Developed an election voting app using Android Studio, allowing users to vote securely and manage elections efficiently, with features like candidate listing and result tracking",
      imgUrl: quiz,
      Sourse:"https://github.com/sahilanand2412/ECM",
      output:""
    },
   
    // {
    //   title: "Rock Paper Scissor",
    //   description: " I created a Rock, Paper, Scissors game using JavaScript, offering a fun and interactive experience with dynamic gameplay and user-friendly controls.",
    //   imgUrl: rock,
    //   Sourse:"https://github.com/sahilanand2412/Rock-Paper-Scissors-game",
    //   output:""
    // },
    // {
    //   title: "Rock Paper Scissor",
    //   description: "abc",
    //   imgUrl: " ",
    // Sourse:"",
    //   output:""
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
                <Nav.Link eventKey="second">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Work
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
                <Tab.Pane eventKey="third"> </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="backgroud-image-right" src={''}></img> */}
    </section>
  );
};
