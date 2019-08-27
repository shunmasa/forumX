import axios from "axios";
import { GET_TOPICS } from "./types";
import { TOPIC_SERVER } from "../components/utils/misc";
//need link which have to sort out by number to show pics and title id whatever 
export function getTopics(){
  const request = axios.get(`${TOPIC_SERVER}`)
  .then(response =>response.data);

return {
 type:GET_TOPICS,
 payload:request
  }
}

//send the pic and comment rating