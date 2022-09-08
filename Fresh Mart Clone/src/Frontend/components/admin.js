import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, Form } from "react-final-form";
import formapi from '../api/api'
import { FORM_ERROR } from 'final-form'
import {wpadmin,fetchcheck} from '../actions/index'





export class admin extends Component {
   

  submit = async (values) => {
    console.log(values)
 this.props.wpadmin(values)



  };

componentDidMount(){
this.props.fetchcheck(window.location)
}


  validate = (values) => {
    const errors = {}
    if (!values.username) {
      errors.username = 'UserName Required'
    }
    if (!values.password) {
      errors.password = 'Password Required'
    }
   
    return errors
  }
  getrender = (val) => {
    console.log(val)
    return (
      <div>
        <h1  style={{fontFamily:"cursive"}} >{val.input.name}</h1>
        <input  style={{fontFamily:"cursive"}} {...val.input} />

      </div>
    );
  };

  render() {
    console.log(this.props.error)

    return (
      <div className="loginpageofadmin">
       <Form onSubmit={this.submit} validate={this.validate} render={({ handleSubmit, form, submitting, pristine, values,submitError }) => {
        return(
            <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1 style={{fontFamily:"cursive"}}>LOGIN</h1>
            <Field
              name="username"
              place="enter your username"
              render={this.getrender}
            />

            <Field
              name="password"
              place="enter your password"
              render={this.getrender}
            />
           
<div style={{padding:"10px 0px"}} className="error">{(this.props.error == null)?null:this.props.error.username}</div>

            <button type="submit">Submit</button>
          </form>
        )
       }}>
      
       </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return {error:state.fielderror}

};

export default connect(mapStateToProps,{wpadmin,fetchcheck})(admin);
