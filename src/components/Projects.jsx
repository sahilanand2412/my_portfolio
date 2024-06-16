import { Col, Container, Row ,Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import { Nav } from "react-bootstrap";
import Resume from "./Resume";
import clone from "../assets/clone.png"
import hotel from "../assets/hotel.png"
import quiz from "../assets/quiz.png"
import todo from "../assets/todo.png"
import rock from "../assets/rock.png"



export const Projects = () => {
  const projects = [
    {
      title: "website Clone",
      description: "I've crafted a bespoke website clone, showcasing proficiency in React and Tailwind CSS.",
      imgUrl: clone,
      Sourse:"https://github.com/shristipriya1207/Clone_website",
      output:""
    },
    {
      title: "Todo App",
      description: "In the todo app, users can seamlessly add and delete tasks, enhancing productivity and user experience.",
      imgUrl: todo,
      Sourse:"https://github.com/shristipriya1207/Todo_app_React",
      output:""
    },
    {
      title: "Hotel Management",
      description: " I implemented a comprehensive hotel booking system using HTML, CSS, and JavaScript, ensuring a seamless user experience.",
      imgUrl: hotel,
      Sourse:"https://github.com/shristipriya1207/Hotel_Management_project",
      output:""
    },
    {
      title: "Java quiz",
      description: "I developed an interactive platform that automates quiz creation, management, and grading, leveraging Java for robust functionality and user-friendly experience.",
      imgUrl: quiz,
      Sourse:"https://github.com/shristipriya1207/java_quiz_project",
      output:""
    },
   
    {
      title: "Rock Paper Scissor",
      description: " I created a Rock, Paper, Scissors game using JavaScript, offering a fun and interactive experience with dynamic gameplay and user-friendly controls.",
      imgUrl: rock,
      Sourse:"https://github.com/shristipriya1207/Rock-Paper-Scissors-game",
      output:""
    },
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
