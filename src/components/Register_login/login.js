import React, { Component } from "react";
import { connect } from "react-redux";
import FormField from "../utils/Form/formfield";
import { withRouter } from "react-router-dom";
import { update, generateData, isFormValid } from "../utils/Form/formActions";
import { loginUser } from "../../actions/user_actions";
import "./login_register.css";
//conet server
//state
class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  //Formaction update() 3 argument ..login action
  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "login");
    //update state  formdata --> newFormdata//props -> state
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };
  //preventdefault event continues unless another event call
  submitForm = event => {
    event.preventDefault();

    //submit 2 argument need for login,name of what you want
    let dataToSubmit = generateData(this.state.formdata, "login");
    let formIsValid = isFormValid(this.state.formdata, "login");

    // if form is valid dispatch to user_action
    //dispatch cames from redux ,loginUser action and data submit
    //dispatch reducer(pure element and to reduce action file)
    if (formIsValid) {
      this.props.dispatch(loginUser(dataToSubmit)).then(response => {
        if (response.payload.loginSuccess) {
          console.log(response.payload);
          this.props.history.push("/user/dashboard");
          //connect push undefine...because this login is child of index.js
          //index.js is the one that child of route
          //this.props.history.push("/user/dashboad");
        } else {
          this.setState({
            formError: true
          });
        }
      });
    } else {
      this.setState({
        formError: true
      }); //if valid is false , show error message ,please your data
    }
  };

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={event => this.submitForm(event)}>
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />

          {this.state.formError ? (
            <div className="error_label">Please check your data</div>
          ) : null}
          <button onClick={event => this.submitForm(event)}>Log in</button>
        </form>
      </div>
    );
  }
}

//canot push('user/dashbord')--becauase this file is child of indexfile
//use withRouter cause index file is the one that child of router
export default connect()(withRouter(Login));
