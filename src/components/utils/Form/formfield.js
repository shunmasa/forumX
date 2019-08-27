import React from "react";
//formdata need value/ type/change path event id blur..lose focus
//formfield id=('id')//type email..id
const Formfield = ({ formdata, change, id }) => {
  const showError = () => {
    let errorMessage = null;
    //valid false as defualt ...if valid and validaiton true

    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="error_label">{formdata.validationMessage}</div>
      );
    }
    //if null
    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            <input
              {...formdata.config}
              value={formdata.value}
              onBlur={event => change({ event, id, blur: true })}
              onChange={event => change({ event, id })}
            />
            {showError()}
          </div>
        );

        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};
export default Formfield;
