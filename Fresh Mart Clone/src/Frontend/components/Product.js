import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import $ from "jquery";

const string = () => {
  return `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAlCAYAAABoM/rvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODM2RjkxMTZBREVFNDExQjZFMEJBRTZFQTNFRUQ0OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkE0RTMyQzZFODkxMUU3OUVDMEM1MjEyOEMwMEI2OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkE0RTMyQjZFODkxMUU3OUVDMEM1MjEyOEMwMEI2OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZDVlNWIwYS01YzhmLThhNDQtYTA4ZC04MjQyOGI3NWFiZTIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MzUzNzVjMy1lYTk0LTExZTYtYjNiNS1hM2Vk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`;
};
const animattion = (index, ff, dad) => {
  if (index == 1) {
    $($(dad)[0].lastChild).stop();

    $($(dad)[0].lastChild).animate({ top: "40px" }, 400, function () {
      console.log("callback");
      $(ff).css("color", "white");
    });
  } else {
    $($(dad)[0].lastChild).stop();
    $(ff).css("color", "black");
    $($(dad)[0].lastChild).animate({ top: "-40px" }, 400, function () {});
  }
};
const Product = (props) => {
  useEffect(() => {
    $(".flexofproduct").hover(
      function () {
        var dad = this;
        var kid = this.children[1];
        if ($($(this)[0].lastChild).hasClass("selectedhover")) {
          return;
        } else {
          animattion(1, kid, dad);
        }
        //Add the active class to the area is hovered
      },
      function () {
        var dad = this;
        var kid = this.children[1];

        if ($($(this)[0].lastChild).hasClass("selectedhover")) {
          return;
        } else {
          animattion(2, kid, dad);
        }
      }
    );
    $(".flexofproduct").click(function () {
      var dad = this;
      var kid = this.children[1];

      if ($($(this)[0].lastChild).hasClass("selectedhover")) {
        $($(this)[0].lastChild).removeClass("selectedhover");
        $($(dad)[0].lastChild).stop();

        animattion(2, kid, dad);
      } else {
        $($(dad)[0].lastChild).stop();

        $($(this)[0].lastChild).addClass("selectedhover");
        animattion(1, kid, dad);
      }
    });
  });

  return (
    <section className="ourproduct">
      <Container style={{ padding: "80px 0px" }}>
        <p className="paraofpro">FRESH FROM OUR FARM</p>
        <h1 className="headlineofpro">Our Products</h1>
        <Row style={{ marginTop: "50px" }}>
          <Col className="productflex">
            <div className="flexofproduct">
              <img src="http://demo.bestprestashoptheme.com/freshmart/themes/vinova_freshmart/assets/img//icon/all.png" />
              <span style={{color:"white"}}>All Product</span>
              <img style={{top:"40px"}} className="selectedhover" src={string()} />
            </div>
            <div className="flexofproduct">
              <img src="http://demo.bestprestashoptheme.com/freshmart/themes/vinova_freshmart/assets/img//icon/all.png" />
              <span>Vegetables</span>
              <img  src={string()} />
            </div>
            <div className="flexofproduct">
              <img src="http://demo.bestprestashoptheme.com/freshmart/themes/vinova_freshmart/assets/img//icon/all.png" />
              <span>Fruits</span>
              <img  src={string()} />
            </div>
            <div className="flexofproduct">
              <img src="http://demo.bestprestashoptheme.com/freshmart/themes/vinova_freshmart/assets/img//icon/all.png" />
              <span>Breads</span>
              <img  src={string()} />
            </div>
            <div className="flexofproduct">
              <img src="http://demo.bestprestashoptheme.com/freshmart/themes/vinova_freshmart/assets/img//icon/all.png" />
              <span>Juices</span>
              <img  src={string()} />
            </div>
            <div className="flexofproduct">
              <img src="http://demo.bestprestashoptheme.com/freshmart/themes/vinova_freshmart/assets/img//icon/all.png" />
              <span>Tea</span>
              <img src={string()} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Product);
