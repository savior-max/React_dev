import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);
  // *

  //
  // *
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then(async ({ data }) => {
        try {
          const { data } = await axios.get("http://localhost:8000/categories");
          setCats(data.title);
        } catch (err) {
          setCats([]);
        }
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setPosts("No Post Found");
        setLoading(false);
      });
  }, []);

  //
  //
  //
  return (
    <div className="m-0 p-0 bg-light">
      <Container>
        <Row className="py-5 g-5">
          <Col xs={12} lg={9}>
            {loading ? (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ padding: "25vh 0" }}
              >
                <Spinner variant="primary" animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <div className="m-0 p-0">
                {typeof posts === "string" || !posts.length ? (
                  <div>
                    <div className="row">
                      <div className="col-12 text-center display-1">
                        {posts}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="m-0 p-0">
                    {posts.map((post) => (
                      <div className="mb-4" key={uuid()}>
                        <Card border="0" className="shadow">
                          <div className="d-flex align_items-cnter">
                            <Card.Body>
                              <div className="pb-3 h4">{post.title}</div>
                              <Card.Text
                                dangerouslySetInnerHTML={{
                                  __html: post.description,
                                }}
                              />

                              <p>
                                <span className="small text-muted">
                                  {" "}
                                  posted by {"  "}
                                </span>{" "}
                                <Link
                                  to={`/contact/${post.author._id}`}
                                  className="text-decoration-none"
                                >
                                  <span className="text-muted">
                                    {post.author.username}{" "}
                                  </span>
                                </Link>
                                <Link
                                  to={`/posts/${post._id}`}
                                  className="text-decoration-none"
                                >
                                  Read More...
                                </Link>
                              </p>
                            </Card.Body>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Col>

          <Col xs={12} lg={3}>
            <Row className="mb-3">
              <div className="px-1">
                <p className="h4 border-bottom mb-2 pb-1"> Categories</p>
                <div className="mb-2 py-2 d-flex flex-wrap">
                  {cats
                    ? cats.map((cat, ind) => (
                        <span
                          key={ind}
                          className="py-1 px-3 mx-1 my-1 rounded-pill border border-primary"
                        >
                          {cat}
                        </span>
                      ))
                    : ""}
                </div>
              </div>
            </Row>
            <Row>
              <div className="px-1">
                <p className="h4 border-bottom mb-2 pb-1"> Recent Post</p>
                <div className="mb-2">
                  <Card border="0" className="shadow-sm ">
                    <div className="d-flex m-0 p-0 align-items-center">
                      <Card.Img
                        src="/img/basket.jpg"
                        className="w-25 img-fluid"
                        alt="cardpeaople"
                      />
                      <Card.Body className="mt-0 pt-0 px-1">
                        <Link
                          to="/recent-Post"
                          className="m-0 p-0 text-decoration-none h6 text-dark"
                        >
                          {" "}
                          Card Blog Title
                        </Link>{" "}
                        <Card.Text className="pt-1">
                          This is a wider card wioml content.
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
                <div className="mb-2">
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
                </div>
                <div className="mb-2">
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
                </div>
                <div className="mb-2">
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
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
