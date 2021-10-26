import {Link} from "react-router-dom"
// import axios from "axios";
import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiJsBadge,
  DiJqueryLogo,
  DiGit,
  DiBootstrap,
  DiWordpress,
  DiHtml5,
  DiCss3Full,
} from "react-icons/di";
import Contact from "../Contact/Contact";
import "./Home.css";

//
//
//
//

const Home = ({ contactSubmit, contactRes }) => {
  const nameRef = useRef(null);
  const contactRef = useRef(null);

  const executeScroll = (e) => {
    if (e === "contact") {
      nameRef.current.focus();
      contactRef.current.scrollIntoView();
    }
  };

  return (
    <div>
      <div className="home">
        <div className="overlay py-5">
          <Container>
            <Row className="g-3">
              <Col xs={12} md={6}>
                <div className="row mt-5">
                  <div className="title">
                    <div className="display-2 text-light">Hi</div>
                    <div className="lead border-bottom text-light title-text">
                      I am <span className="h4">SAVIOR,</span>
                      <p className="pt-2 lead"> A MERN Stack Developer</p>
                    </div>
                    <div className="mt-4 mb-md-0 mb-5 d-flex flex-column  flex-lg-row">
                      <Button
                        variant="light"
                        type="button"
                        className="free btn-lg"
                        href="/files/resume.docx"
                      >
                        Download Resume{" "}
                      </Button>
                      <Button
                        onClick={() => {
                          executeScroll("contact");
                        }}
                        variant="outline-light"
                        className="touch btn-lg mt-lg-0 mt-4 "
                      >
                        Get in Touch
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <Row className="g-3">
                  <Col xs={6} className="text-center">
                    <div className="my_shadow card_bg">
                      <DiReact
                        className="display-1"
                        color=" rgb(116, 201, 235)"
                      />
                      <div className="h3">React</div>
                    </div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <div className="my_shadow card_bg">
                      <DiNodejsSmall className="display-1" color="seaGreen" />
                      <div className="h3">Node-js</div>
                    </div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <div className="my_shadow card_bg">
                      <DiMongodb className="display-1" color="seaGreen" />
                      <div className="h3">Mongodb</div>
                    </div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <div className="my_shadow card_bg">
                      <DiJsBadge className="display-1" color="#f0db4f" />
                      <div className="h3">Javascript</div>
                    </div>
                  </Col>
                  <Col xs={12} className="text-center">
                    <div className="my_shadow card_bg">
                      <DiJqueryLogo className="display-1" color="skyBlue" />
                      <DiGit className="display-1" color="black" />
                      <DiBootstrap className="display-1" color="purple" />
                      <DiWordpress className="display-1" color="white" />
                      <DiHtml5 className="display-1" color="rgb(29, 93, 192)" />
                      <DiCss3Full
                        className="display-1"
                        color="rgb(29, 93, 132)"
                      />
                      <div className="h3">Dev Tech</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="contact  home_contact bg-light">
        <div ref={contactRef} className="pt-5">
          <Contact
            nameRef={nameRef}
            onSubmit={contactSubmit}
            res={contactRes}
            btn="outline-secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
