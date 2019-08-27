import React, { Component } from "react";
import FormField from "../utils/Form/formfield";
import { connect } from "react-redux";
import { update, generateData, isFormValid } from "../utils/Form/formActions";
import { registerUser } from "../../actions/user_actions";
import Dialog from "@material-ui/core/Dialog";
import "./login_register.css";
class Register extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your full name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      username: {
        element: "input",
        value: "",
        config: {
          name: "username_input",
          type: "text",
          placeholder: "Enter your username"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
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
      },
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm your password"
        },
        validation: {
          required: true,
          confirm: "password"
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "register");
    //update state  formdata --> newFormdata//props -> state
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  submitForm = event => {
    event.preventDefault();
    //submit 2 argument need for login,name of what you want
    let dataToSubmit = generateData(this.state.formdata, "register");
    let formIsValid = isFormValid(this.state.formdata, "register");

    if (formIsValid) {
      this.props
        .dispatch(registerUser(dataToSubmit))
        .then(response => {
          if (response.payload.success) {
            ////show a message redirect back user to login
            this.setState({
              formError: false,
              formSuccess: true
            });
            setTimeout(() => {
              this.props.history.push("/register_login");
            }, 3000); //after 3 second redirect
          } else {
            this.setState({ formError: true });
          }
        })
        .catch(e => {
          this.setState({ formError: true });
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="page_wraper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={event => this.submitForm(event)}>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"name"}
                      formdata={this.state.formdata.name}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"username"}
                      formdata={this.state.formdata.username}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    id={"email"}
                    formdata={this.state.formdata.email}
                    change={element => this.updateForm(element)}
                  />
                </div>
                <h2>Verify password</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"password"}
                      formdata={this.state.formdata.password}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"confirmPassword"}
                      formdata={this.state.formdata.confirmPassword}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
                <div>
                  {this.state.formError ? (
                    <div className="error_label">please check your data</div>
                  ) : null}

                  <button
                    onClick={event => {
                      this.submitForm(event);
                    }}
                  >
                    Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Dialog open={this.state.formSuccess}>
          <div className="dialog_alert">
            <div>Conguratulations !!</div>
            <div>
              You will be redirect to the LogIn in a couples of seconds....
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
//dialog show success message//formsuccess :false ..errormessage gone
export default connect()(Register);
