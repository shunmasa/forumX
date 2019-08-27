import { GET_TOPICS} from "../actions/types";

//server ligin success//give a licence
export default function(state = {}, action) {
  switch (action.type) {
   case GET_TOPICS:
    return {...state}
    default:
      return state;
  }
}
