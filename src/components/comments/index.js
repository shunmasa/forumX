import React, { Component } from "react";
import Content from "./content";
import Expantion from "./expantion";

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          title: "Java",
          userName:'jhone',
          image: require("../../Resources/css/img/joker.jpg"),
          date:30,
          rate: 700,
          id: "129182019",
          comments:
            "Lorem ipsum dolor sit amet consectetur adipisicinilique.Cumque quam sit minus dolores consequatur unde eos"
        },
        {
          title: "Food",
          userName: 'peter',     
          image: require("../../Resources/css/img/game.png"),
          
          rate: 100,
          comments: "awesome!!",
          id:"u1492142492",
          date:2
         
        },
        {
          title: "game",
          userName:'mark',
          image: require("../../Resources/css/img/deadpool.jpg"),
          rate: 1000,
          comments: "It is not good solution",
          date:10
        },
     
      ]
    };
  }

  render() {
    return (
   <div className="container-content">
        <div className="row">
          <div className="col-1">
            <div className="d-flex flex-row align-items-stretch">
              <div />
            </div>
          </div>

    <div className="wrapper-color">
      <div className="col-10">
            <div className="d-flex flex-column">
     
        <Content topics ={this.state.title}/>
       {this.state.comments.map((comment,i)=>(
        <Expantion  {...comment} key={i}/>
       ))}
      
     </div>
      </div>
     

      <div className="col-1">
            <div className="align-items-stretch">
              <div />
            </div>
          </div>


      </div>
      </div>
      </div>
    );
  }
}
export default Comment;
