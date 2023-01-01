import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imgUrl from "../assets/img/project-img1.png";
import bekiImg from "../assets/img/team/bekiImg.jpg";
import ephaImg from "../assets/img/team/ephaImg.png";
import abeniImg from "../assets/img/team/abeniImg.png";
import "animate.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Teams = () => {
  return (
    <section className="project" id="teams">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* <TrackVisibility>
                {({ isVisible }) => ( */}
                  <div
                    // className={
                    //   isVisible ? "animate__animated animate__fadeIn" : ""
                    // }
                  >
                    <h2>Team Members</h2>
                    <p>This are our Developer Team Memebers</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content
                        id="slideInUp"
                        // className={
                        // //   isVisible
                        // //     ? "animate__animated animate__slideInUp"
                        // //     : ""
                        // }
                      >
                        <Tab.Pane eventKey="first">
                          <br></br>
                          <br></br>
                          <br></br>
                          <Row>
                            <Col size={12} sm={6} md={4}>
                              <div className="proj-imgbx">
                                <img src={bekiImg} />
                                <div className="proj-txtx">
                                  <h4>Bereket Zelalem</h4>
                                  <span>Full Stack Developer</span>
                                </div>
                              </div>
                            </Col>

                            <Col size={12} sm={6} md={4}>
                              <div className="proj-imgbx">
                                <img src={ephaImg} />
                                <div className="proj-txtx">
                                  <h4>Epherem Kapo</h4>
                                  <span>Developer</span>
                                </div>
                              </div>
                            </Col>

                            <Col size={12} sm={6} md={4}>
                              <div className="proj-imgbx">
                                <img src={abeniImg} />
                                <div className="proj-txtx">
                                  <h4>Abenezer Fikadu</h4>
                                  <span>UI/UX and Graphics Designer</span>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <br></br>
                        <br></br>
                        <br></br>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                {/* )} */}
              {/* </TrackVisibility> */}

              {/* <h2>Services </h2>
              <p>
                We provide services with high quality products and very
                Efficient Development and Delivery Times. We can help you if you
                want services like
              </p>
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
              {/* <Tab.Pane eventKey="first">
                        <br></br>
                        <br></br>
                        <br></br>
                        <Row>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={imgUrl} />
                              <div className="proj-txtx">
                                <h4>Bereket Zelalem</h4>
                                <span>Full Stack Developer</span>
                              </div>
                            </div>
                          </Col>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={imgUrl} />
                              <div className="proj-txtx">
                                <h4>Epherem Kapo</h4>
                                <span>Developer</span>
                              </div>
                            </div>
                          </Col>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={imgUrl} />
                              <div className="proj-txtx">
                                <h4>Abenezer Fikadu</h4>
                                <span>UI/UX and Graphics Designer</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <br></br>
                      <br></br>
                      <br></br>


              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
