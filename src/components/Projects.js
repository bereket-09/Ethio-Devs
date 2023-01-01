import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import erpClinic from "../assets/img/projects/erpClinic.jpeg";
import evoting from "../assets/img/projects/evoting.png";
import movieTicket from "../assets/img/projects/movieTicket.jpeg";
import ozone from "../assets/img/projects/ozone";
import warehouse from "../assets/img/projects/warehouse.jpg";
import hotel from "../assets/img/projects/hotel.jpg";
import ticket from "../assets/img/projects/ticket.jpg";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "ERP Based Clinic Management System",
      description: "Designed & Developed using Laravel",
      imgUrl: erpClinic,
    },
    {
      title: "Blockchain Based E-Voting System",
      description: "Full Development Using Solidity language",
      imgUrl: evoting,
    },
    {
      title: "OZONE GAME CENTER",
      description: "Design & Development including a backend CMS",
      imgUrl: ozone,
    },
  ];

  const projects2 = [
    {
      title: "Movie Ticket Booking ",
      description:
        "Fully functional movie ticket booking app for Multiple cinemas",
      imgUrl: movieTicket,
    },
    {
      title: "Hotel Room Reservation System ",
      description: "Fully Functional Desktop app developed using Java GUI",
      imgUrl: hotel,
    },
    {
      title: "Personal Blog site",
      description: "A personal Blog site using NEXT JS and sanity Backend",
      imgUrl: projImg3,
    },
  ];

  const projects3 = [
    {
      title: "Ethio-Djibuti Railway Ticket System",
      description:
        "Ticket Booking system done as school project for Ethio Dijibuti Railway train",
      imgUrl: ticket,
    },
    {
      title: "ERP Based Warehouse Managment System for Dire Dawa University",
      description: "Developed using Laravel",
      imgUrl: warehouse,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This are some projects our teams have worked on. This
                    projects also include large scale projects like ERP Based
                    systems, BlockChain Systems and many smaller scaled Projects
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Page 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Page 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Page 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((projects, index) => {
                            return <ProjectCard key={index} {...projects} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((projects2, index) => {
                            return <ProjectCard key={index} {...projects2} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((projects3, index) => {
                            return <ProjectCard key={index} {...projects3} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
