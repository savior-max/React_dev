import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MyGoogleMap from "../G-maps/Google";

const Contact = ({
  onSubmit = formInfo,
  nameRef = () => {},
  btn,
  res = () => ({}),
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email, name: name, body: body });
  };

  let [nameRes, bodyRes, emailRes] = ["", "", ""];
  if (typeof res !== "undefined" && res !== "" && !res.message) {
    res.name ? (nameRes = res.name.message) : (nameRes = "");
    res.body ? (bodyRes = res.body.message) : (bodyRes = "");
    res.email ? (emailRes = res.email.message) : (emailRes = "");
  }
  return (
    <div>
      <div className="contact py-5">
        <div className="contact-overlay">
          <Container>
            <Row>
              <Col md={6}>
                <div className="contact-title">
                  <div className="h2 ">Contact</div>
                  <div className="contact-sub h5 pt-3"> Leave a Message</div>
                  <p className="lead">
                    Growing to Serve you Better <br />
                    I'll be Happy to Have you Contact me
                  </p>
                </div>
              </Col>
              <Col md={6} className="mt-4 mt-md-0">
                <div className="my-form">
                  <div className="form-overlay">
                    <Form onSubmit={contactSubmit} className="row">
                      <Form.Group className="mb-3 col-md-6" controlId="name">
                        <Form.Control
                          ref={nameRef}
                          autoComplete="off"
                          type="text"
                          onChange={nameChange}
                          placeholder="Name"
                          value={name}
                        />
                        <Form.Text className="text-danger">{nameRes}</Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-6" controlId="email">
                        <Form.Control
                          autoComplete="off"
                          type="email"
                          onChange={emailChange}
                          placeholder="Email"
                          value={email}
                        />
                        <Form.Text className="text-danger">
                          {emailRes}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3 " controlId="message">
                        <Form.Control
                          as="textarea"
                          rows={8}
                          type="text"
                          onChange={bodyChange}
                          placeholder="Message"
                          value={body}
                          autoComplete="off"
                        />
                        <Form.Text className="text-danger">{bodyRes}</Form.Text>
                      </Form.Group>
                      <div className="col-12 d-flex justify-content-between">
                        {res.message && true ? (
                          <p className="ok text-success">{res.message}</p>
                        ) : (
                          <span className="ok"></span>
                        )}
                        <Button variant={btn} type="submit" className="btn-lg">
                          Send
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Col>
              <Col md={5} lg={4} className="mt-4 mt-md-5">
                <div className="address">
                  <div className="address-title h3">Contact Address</div>
                  <div className="lead">
                    No: 9 Salvation Close off <br />
                    Diamond Valley Estate By <br />
                    Total Gospel Aveneu off <br />
                    Peter Odili Road P.H
                  </div>
                  <div className="lead">Saviorisrael@gmail.com</div>
                  <div className="lead">+234 (0) 812 899 1543</div>
                </div>
              </Col>
              <Col md={7} lg={8} className="mt-4 mt-md-5">
                <div className="bg-light map">
                  {/* <MyGoogleMap isMarkerShown /> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const formInfo = (e) => {
  e.preventDefault();
  console.log(`form submission not wired to a function`);
};
