import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Home,
  About,
  Blog,
  Contact,
  Single,
  Header,
  Footer,
  ErrorPage,
} from "./components";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const baseUrl = "http://localhost:8000/api";

function App() {
  const [formresponse, setFormresponse] = useState("");

  const contactSubmit = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/contact`, data);
      res.statusText === "Created"
        ? setFormresponse({ message: "thank you for contacting me" })
        : setFormresponse(res.data);
    } catch (error) {
      setFormresponse("ERR could not process Form");
    }
  };

  return (
    <Router>
      <div className="">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home contactSubmit={contactSubmit} contactRes={formresponse} />
          </Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/contact">
            <Contact onSubmit={contactSubmit} res={formresponse} />
          </Route>
          <Route exact path="/posts/:_id" component={Single} />

          <Route exact path="/files/resume.docx">
            <Redirect to="/" />
          </Route>

          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
