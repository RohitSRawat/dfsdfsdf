import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchcheck, destorytoken,createproducts } from "../actions/index";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import history from "../history";
import { Field, Form } from "react-final-form";
import formapi from '../api/api'
import $ from 'jquery'
export class adminproduct extends Component {
  constructor(props) {
    super(props);
    this.state = { fetch: "Products" };
    this.myRef = React.createRef();
    this.form = React.createRef();

  }

  componentDidMount() {
    this.props.fetchcheck(window.location);
    // console.log(this.myRef.current.src)
    window.onbeforeunload = function() {
  }
  }
  componentWillUnmount(){
    

  }

  submitval = async (val) => {

    const formdata = new FormData($('#myform')[0][3].files[0])

  const response =  formapi.post("/creatproduct",val).then(async function (response) {
    
     const newres = await formapi.put("/addimage",formdata)
     console.log(newres);
     history.push('/dashboard/products')

    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  


  };

  
  setinput = (val) => {
    console.log(val)
    if(val.input.name == 'Image'){
      return (
        <div>
          <h1>{val.input.name}</h1>
           <input type={val.typs}     {...val.input} />
  
        </div>
      );
    }else{
      return (
        <div>
          <h1>{val.input.name}</h1>
           <input type={val.typs}   {...val.input} />
  
        </div>
      );
    }
   
  };
  validation = (val) => {
    const error = {};

    if (!val.Product) {
      error.Product = "please enter the product name "
    }
    if (!val.Category) {
      error.Category = "please enter the Category name ";
    }
    if (!val.Price) {
      error.Price = "please enter the Price ";
    }
   

    return error;
  };
 
  renderdata = () => {
    if (this.state.fetch == "Products") {
      return (
        <div>
          <form onSubmit={ async (e) => {
               
               e.preventDefault()
               console.log(e.target)
              var formData = new FormData(e.target)      
             try {
              
               var res =  await formapi.post('/creatproduct',formData)
alert("Successfully Created")
               console.log(res)
              } catch (error) {
              console.log(error)
              }
      
          }}>
            <label>Product
                <input type="text" name='Product'/>
                </label>
                <br></br>
                <label>Category
                <input type="text" name='Category' />
                </label>
                <br></br>
                <label>Price
                <input type="number" name='Price' placeholder='Player age'/>
                <br></br>

                <input onChange={async (e) => {
                              var formData = new FormData();

                              formData.append('Image',e.target.files[0])

  try {
  var res =     await formapi.post('/fetchimage',formData)   
  this.myRef.current.src =res.data
  } catch (error) {
  console.log(error)
 }

                }} type="file" name="Image" multiple/>
                <br></br>

                </label>
                <button  type="submit">Submit</button>
    
            </form>

          <img ref={this.myRef}  src="C:\Users\Ar Bros\Documents\ordering\Fresh Mart Clone\src\Backend\upload\MicrosoftTeams-image_(14).png"/>
        </div>
      );
    }

//     return(
//       <Form onSubmit={this.submitval} render={({ handleSubmit, form, submitting, pristine, values,submitError }) => {
//         return(
//           <form  id='myform' ref={this.form} onSubmit={handleSubmit}>
// <Field name='Product' typs='text' render={this.setinput}/>
//           <Field name='Category' typs='text' render={this.setinput}/>
//           <Field name='Price' typs='text' render={this.setinput}/>
//           <Field name='Image' typs='file' render={this.setinput}/>
//           <button type="submit">Submit</button>

//           </form>
       


//         )
//       }}/>
//     )
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
                      history.push("/dashboard");
                    }}
                  >
                    Dashboard
                  </li>
                  <li
                    onClick={() => {
                      history.push("/dashboard/products");

                    }}
                  >
                    Products
                  </li>
                  <li
                    onClick={() => {
                      history.push("/dashboard/Users");
                    }}
                  >
                    Users & sale
                  </li>
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

export default connect(mapStateToProps, { fetchcheck, destorytoken,createproducts })(
  adminproduct
);
