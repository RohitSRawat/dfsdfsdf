import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productaction } from "../actions";
import { connect } from "react-redux";
import { Buffer } from "buffer";
import Product from "./Product"

class Content extends Component {
  render() {
    return (
      <React.Fragment>
<Header/>
<section className="slideshow">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col>
              <img
                style={{ width: "inherit" }}
                src="http://demo.bestprestashoptheme.com/freshmart/modules/novnivoslider/images/c60c7c9388da2b0fc39cc5b86cf5aa9c3421c9b9_1.jpg"
              />
            </Col>
          </Row>
          <Row className="menutoogle hideshow">
            <Col md={3}>
              <ul id="headli">
                <li>My Account</li>
                <li>Sign In</li>
                <li>Register Account</li>
                <li>Cart</li>
              </ul>
            </Col>
          </Row>
          <Row className="imgofflow">
           <img className="img-fluid" src='http://demo.bestprestashoptheme.com/freshmart/themes/vinova_freshmart/assets/img//pattern-h4.png'/>
          </Row>
        </Container>
      </section>
<Product/>
      </React.Fragment>
      
    );
  }
}

const mapstate = (state) => {
  return { productlist: state.productget };
};

export default connect(mapstate, { productaction })(Content);
