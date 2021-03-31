import logo from "../../asset/company-logo.png";
import { Form, Button, Col } from "react-bootstrap";
import "../signup/signup.css";
import { useState, useEffect } from "react";
import validator from "validator";

const Signup = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  const [isFirst, setIsFirst] = useState(false);
  const [islast, setIslast] = useState(false);
  const [isemail, setIsemail] = useState(false);
  const [confirmPass, setconfirmPass] = useState(false);

  useEffect(() => {
    if (state.firstName.match(/^[a-zA-Z]*$/) == null) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }
    if (state.lastName.match(/^[a-zA-Z]*$/) == null) {
      setIslast(true);
    } else {
      setIslast(false);
    }
    if (validator.isEmail(state.email)) {
      setIsemail(false);
    } else if (state.email !== "") {
      setIsemail(true);
      console.log("1");
    }
    if (state.pass == state.confirmPass) {
      setconfirmPass(false);
    } else {
      setconfirmPass(true);
    }
  }, [state]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.id]: value,
    });

    // console.log(e.target.value);
  };
  console.log("first", state.firstName);
  console.log("last", state.lastName);
  console.log("email", state.email);

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="company-logo" />
      </div>
      <div className="head">
        <h3>Sign Up for ReAlpa</h3>
      </div>

      <Form>
        <Form.Row>
          <Form.Group as={Col} className="col-md-6">
            <Form.Control
              onChange={handleChange}
              value={state.firstName}
              name="firstName"
              type="text"
              className={isFirst ? "error-css" : "form-control"}
              id="firstName"
              placeholder="First Name"
              required
            />
          </Form.Group>

          <Form.Group as={Col} className="col-md-6">
            <Form.Control
              onChange={handleChange}
              type="text"
              name="lastName"
              className={islast ? "error-css" : "form-control"}
              id="lastName"
              placeholder="Last Name"
              required
              value={state.lastName}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="col-12">
            <Form.Control
              onChange={handleChange}
              type="email"
              className={isemail ? "error-css" : "form-control"}
              id="email"
              placeholder="Email"
              required
              value={state.email}
            />
          </Form.Group>

          <Form.Group className="col-12">
            <Form.Control
              onChange={handleChange}
              value={state.pass}
              type="password"
              className="form-control"
              id="pass"
              placeholder="password"
              required
            />
          </Form.Group>
          <Form.Group className="col-12">
            <Form.Control
              onChange={handleChange}
              value={state.confirmPass}
              type="password"
              className={confirmPass ? "error-css" : "form-control"}
              id="confirmPass"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <div className="col-12 ">
            <Button
              type="submit"
              className="signup btn"
              variant="primary"
              size="lg"
              block
            >
              Sign in
            </Button>
          </div>
        </Form.Row>

        <Form.Row className="social">
          <Button className="btn google" variant="primary" size="lg" block>
            <i className="fab fa-google"></i>
            Sign in with Google
          </Button>
        </Form.Row>
        <Form.Row className="social">
          <Button className="btn facebook" variant="primary" size="lg" block>
            <i className="fab fa-facebook-f"></i>
            Sing in with Facebook
          </Button>
        </Form.Row>
        <Form.Row className="social">
          <Button className="btn linkedin" variant="primary" size="lg" block>
            <i className="fab fa-linkedin-in"></i>
            Sign in with Linkedin
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Signup;
