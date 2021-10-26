import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { uuid } from "uuidv4";
import { v4 as uuid } from "uuid";

import { Container, Row,  Col, Spinner } from "react-bootstrap";
import axios from "axios";

const Single = ({ match, location }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/${match.params._id}`)
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPost({ message: "Post Not Found" });
      });
  }, [match.params._id]);

  return (
    <div className="m-0 p-0 ">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ padding: "45vh 0" }}
        >
          <Spinner variant="primary" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="m-0 p-0">
          <Container>
            <Row className="py-5 g-4">
              <Col xs={12} lg={9}>
                <div className="m-0 ">
                  <div className="blog-post bg-light px-3 rounded ">
                    <div className="metadata">
                      <p>
                        <span className="display-5">{post.title}</span>
                        <br />
                        by{" "}
                        <Link to={`/users/${post.author.username}`}>
                          {post.author.username}
                        </Link>{" "}
                      </p>
                    </div>
                    <div
                      className="lead"
                      dangerouslySetInnerHTML={{
                        __html: post.body,
                      }}
                    ></div>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={3}>
                <Row className="mb-3">
                  <div className="px-1">
                    <p className="h4 border-bottom mb-2 pb-1"> Categories</p>
                    <div className="mb-2 py-2 d-flex flex -wrap">
                      {post.categories.map((cat, ind) => (
                        <span
                          key={uuid()}
                          className="py-1 px-3 mx-1 my-1 rounded-pill border border-primary"
                        >
                          {cat}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="px-1">
                    <p className="h4 border-bottom mb-2 pb-1"> Recent Post</p>

                    {/* <div className="mb-2">
                      <Card border="0" className="shadow-sm ">
                        <div className="d-flex m-0 p-0 align-items-center">
                          <Card.Img
                            src="/img/basket.jpg"
                            className="w-25 img-fluid"
                            alt="cardpeaople"
                          />
                          <Card.Body className="mt-0 pt-0 px-1">
                            <Card.Subtitle className="mt-0">
                              <Link
                                to="/recent-Post"
                                className="text-decoration-none text-muted "
                              >
                                {" "}
                                Card Blog Title
                              </Link>{" "}
                            </Card.Subtitle>
                            <Card.Text className="pt-1">
                              This is a wider card wioml content.
                            </Card.Text>
                          </Card.Body>
                        </div>
                      </Card>
                    </div> */}
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="px-1">
                    <p className="h4 border-bottom mb-2 pb-1"> Tags</p>
                    <div className="mb-2 py-2 d-flex flex-wrap">
                      {post.tags.map((tag, ind) => (
                        <span
                          key={uuid()}
                          className="py-1 px-3 mx-1 my-1 rounded-pill border border-primary"
                        >
                          {tag}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Single;
