import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Header() {
  return (
    <section>
      <Container style={{padding:"10px 0px 20px 0px"}}>
        <Row style={{ alignItems: "center" }}>
          <Col md={6}>
            <img src="http://demo.bestprestashoptheme.com/freshmart/modules/novthemeconfig/images/logos/logo-1.png" />
          </Col>
          <Col style={{ textAlign: "end" }} md={6}>
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />

              <i className="circular search link icon"></i>
            </div>
            <i id="headicon" className="shopping cart icon"></i>
            <i id="headicon" className="bars icon" onClick={() => {
                 document.querySelector('.menutoogle').classList.toggle("hideshow");
            }}></i>
          </Col>
        </Row>
       
      </Container>
    </section>
    
  );
}

export default Header;
