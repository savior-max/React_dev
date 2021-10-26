import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} className="py-5">
            <div className="h2 display-2 text-center">404! Page not Found</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
