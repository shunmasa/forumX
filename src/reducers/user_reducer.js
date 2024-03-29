import { LOGIN_USER, REGISTER_USER } from "../actions/types";

//server ligin success//give a licence
export default function(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
