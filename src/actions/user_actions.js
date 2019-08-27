//axios to make a request
import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";
import { USER_SERVER } from "../components/utils/misc";

//Axios is a promise-based HTTP client that works both in the browser and in a node.js environment. It basically provides a single API for dealing with XMLHttpRequest s and node's http interface.
//axios get data and submit

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data);
  //always return type and payload
  return {
    type: REGISTER_USER,
    payload: request
  };
}

//recieving data to submit
//make a request...server will be returning success (server.js)
export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request
  };
}
// export function auth() {
//   const request = axios
//     .get(`${USER_SERVER}/auth`)
//     .then(response => response.data);

//   return {
//     type: AUTH_USER,
//     payload: request
//   }; //get request
// }
