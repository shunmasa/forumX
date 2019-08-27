import React, { Component } from 'react'
import './message.css'

class Message extends Component {
  render() {
    return (
      
<div className="wrapper-message">
<div className="commentBoxfloat">
  <form className="cmnt">
    <fieldset>
      <div className="form_grp">
        <div className="wrapper-label">New Comment</div>
        <textarea className="userCmnt" placeholder="I was lazy , so here's no text !!"></textarea>        
      </div>
      <div className="form_grp">
      <button className="button-label"type="button" id="submit">Submit</button>
      </div>
    </fieldset>
  </form>  
</div>
  <div id="cmntContr"></div>
 </div>
    )
  }
}


export default Message;