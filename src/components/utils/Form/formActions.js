export const validate = (element, formdata = []) => {
  let error = [true, ""]; //''no error message
  //email  RegX @ type validation
  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? "Must be a valid email" : ""}`; //if invalid is true return message"this field ";
    error = !valid ? [valid, message] : error; //if invalid is not --true default error '' nothing
  } //if it is not valid return error

  //confirm password//validate confirm:password
  if (element.validation.confirm) {
    const valid =
      element.value.trim() === formdata[element.validation.confirm].value;
    const message = `${!valid ? "Password do not match" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  //password,name,lastname...every filed that need to check empty or not
  //trim space
  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};

//update func 3 arg element ,formdata formName which is id
export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata
  };
  const newElement = {
    ...newFormdata[element.id] //element(props)= input valueid={'emial'}{'password}
  };
  //copy element//JS ...type always event.target.value//input
  newElement.value = element.event.target.value;
  //touched
  if (element.blur) {
    let validData = validate(newElement, formdata);
    //validation and error message //validate empty and match the new and old data
    newElement.valid = validData[0]; //validata return array first value
    newElement.validationMessage = validData[1]; //error message
  }
  newElement.touched = element.blur;

  newFormdata[element.id] = newElement; //new statement data //replace to new data

  return newFormdata;
};
//5times loop
// var keyVal=1;
// for(var key in data) {
//   if(keyVal <= 5){
//     var value = data[key];
//   }
//   keyVal++;
// }
//default set dataToSubmit
export const generateData = (formdata, formName) => {
  let dataToSubmit = {};
  //key in  this case email or password
  //looping objects(formdata)
  for (let key in formdata) {
    //confirm password
    if (key !== "confirmPassword") {
      dataToSubmit[key] = formdata[key].value;
    } //if key ..pasword,email, name is there ,submit [key].if key = confirmpasssword
    //submit[key]
  }
  return dataToSubmit;
};
//just true or false
export const isFormValid = (formdata, formName) => {
  let formIsValid = true;
  //key password or email
  for (let key in formdata) {
    formIsValid = formdata[key].value && formIsValid;
  }
  return formIsValid;
};
