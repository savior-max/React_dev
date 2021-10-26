import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import "./About.css";
import { DiNodejs, DiReact, DiMongodb, DiJavascript } from "react-icons/di";

import authorPhoto from "../../assets/img/author/sec.jpg";
const About = () => {
  const project_name = "node_resful_Api";
  return (
    <div>
      <div className="aboutoverlay bg-light">
        <Container>
          <Row className="py-5 g-5">
            <Col md={4}>
              <div className="aboutpage">
                <div className="about-text">
                  <div className="img">
                    <img
                      src={authorPhoto}
                      className="w-100 rounded"
                      alt="author"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="about-text">
                <div className="h4">About Me</div>
                <div className="text lead">
                  My name is ISRAEL SAVIOUR, i'm 25years old male from Oruk-Anam
                  L.G.A of Akwa-Ibom State of Nigeria. Becomming a Developer had
                  always been my dream, but the love for Technology,the
                  curiuosity and the desires to know how things works has always
                  been the fire behind my success, keeping me more energize to
                  learning new things on the process to becoming my dream.{" "}
                  <br />
                  Starting from the very basic of HTML CSS JAVASCRIPT on my own
                  with the help of Tech Pdf materials, to a MERN stack
                  development pace, I would say it has been a great journey. and
                  I am Hoping, that by GOD's grace, More Stack will be covered
                </div>
                <div className="project h3 pt-4">Projects</div>
                <div className="projects-details">
                  <Row className="d-flex align-items-stretch">
                    <Col md={6} lg={4} className="text-center my-3">
                      <Link
                        to={`/project/${project_name}`}
                        className="nav-link p-0 m-0 "
                      >
                        <div className="rounded shadow card_bg  px-3 py-1 bg-white">
                          <div>
                            <DiNodejs className="display-1" color="seaGreen" />
                          </div>
                          <div className=" text-center w-100">
                            <p className="project-title h3">
                              Node Blogging Restful API
                            </p>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md={6} lg={4} className="text-center my-3">
                      <Link
                        to={`/project/${project_name}`}
                        className="nav-link p-0 m-0 "
                      >
                        <div className="rounded shadow card_bg  px-3 py-1 bg-white">
                          <div>
                            <DiReact className="display-1" color="skyblue" />
                          </div>
                          <div className=" text-center w-100">
                            <p className="project-title h3">
                              Starting up a new React Project
                            </p>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md={6} lg={4} className="text-center my-3">
                      <Link
                        to={`/project/${project_name}`}
                        className="nav-link p-0 m-0 "
                      >
                        <div className="rounded shadow card_bg  px-3 py-1 bg-white">
                          <div>
                            <DiMongodb className="display-1" color="seaGreen" />
                          </div>
                          <div className=" text-center w-100">
                            <p className="project-title h3">
                              CRUD Operation with Mongoose
                            </p>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md={6} lg={4} className="text-center my-3">
                      <Link
                        to={`/project/${project_name}`}
                        className="nav-link p-0 m-0 "
                      >
                        <div className="rounded shadow card_bg  px-3 py-1 bg-white">
                          <div>
                            <DiJavascript
                              className="display-1"
                              color="seaGreen"
                            />
                          </div>
                          <div className=" text-center w-100">
                            <p className="project-title h3">
                              Asycronous Javascript
                            </p>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
