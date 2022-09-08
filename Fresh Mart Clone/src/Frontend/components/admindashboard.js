import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchcheck, destorytoken } from "../actions/index";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import history from "../history";

export class admindashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { fetch: "Dashboard" };
  }

  componentDidMount() {
    this.props.fetchcheck(window.location);
  }
  renderdata = () => {
    if (this.state.fetch == "Dashboard") {
      return (
        <React.Fragment>
          <h1>Dashboard</h1>
          <h1 style={{ marginTop: "40px" }}>
            Hello Welcome {this.props.token.username}
          </h1>

          <button
            onClick={() => {
              this.props.destorytoken();
            }}
          >
            sign out
          </button>
        </React.Fragment>
      );
    }
    
   
  };
  renderss = () => {
    if (this.props.token instanceof Object) {
      return (
        <React.Fragment>
          <Container fluid>
            <Row style={{ height: "100vh" }}>
              <Col md={2} className="sideof">
                <ul className="ulstyle">
                  <li>
                    {" "}
                    <img src="http://demo.bestprestashoptheme.com/freshmart/modules/novthemeconfig/images/logos/logo-1.png" />
                  </li>

                  <li
                    onClick={() => {
                      this.setState({ fetch: "Dashboard" });
                    }}
                  >
                    Dashboard
                  </li>
                  <li  onClick={() => {
                      history.push("/dashboard/products");
                    }}>Products</li>

                  
                    
                  
                  <li  onClick={() => {
                      history.push("/dashboard/Users");
                    }}>Users & Sale</li>

                </ul>
              </Col>
              <Col md={10}>{this.renderdata()}</Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>YOU ARE NOT AUTHNICATE</h1>
          <span></span>
          <Link to="/admin">
            <h2>BACK TO LOGIN</h2>
          </Link>
        </React.Fragment>
      );
    }
  };
  render() {
    return <div>{this.renderss()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { token: state.checktoken };
};

export default connect(mapStateToProps, { fetchcheck, destorytoken })(
  admindashboard
);
