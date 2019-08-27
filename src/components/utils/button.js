import React from "react";
import { Link } from "react-router-dom";
//props Mybutton Register ...index.js
const MyButton = props => {
  const buttons = () => {
    let template = "";

    switch (props.type) {
      case "default":
        template = (
          <Link className="link-default" to={props.linkTo} {...props.addStyles}>
            {props.title}
          </Link>
        );
        break;
      default:
        template = "";
    }
    return template;
  };

  return <button className="my-link">{buttons()}</button>;
};

export default MyButton;
