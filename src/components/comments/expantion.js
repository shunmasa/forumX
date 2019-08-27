import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./comments.scss";
import CardActions from "@material-ui/core/CardActions";
 
const Expantion = props => {

return (
  
    <Card className="card">
      <CardContent>
      <div class="comment-box">
      <div class="wonderful"> Rate +
          <span >{props.rate} </span></div>
      </div>
     

      <h5 className="card-header">
    <div className="comment-header">
    <div className="comment-header-img-box"></div>
    <div className="comment-header-username d-flex direction-row ">{props.userName}</div>
    <div className="comment-header-meta">{props.date}days ago</div>
    </div>
        </h5>

        



        <div className="card-body">
          <h5 className="card-title">Comment</h5>
          <p className="card-text">
         {props.comments}
          </p>
        </div>

        <CardActions className="card-expantion">read more this comment</CardActions>
     
      </CardContent>
     
    </Card> 

  );
};

export default Expantion;

 