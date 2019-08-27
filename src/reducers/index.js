import { combineReducers } from "redux";
import user from "./user_reducer";
import topics from './topic_reducer'
const rootReducer = combineReducers({
  user,
  topics
});
export default rootReducer;
