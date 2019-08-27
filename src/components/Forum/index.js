import React, { Component } from "react";
import Topic from "././topic";

// import {connect} from './react-redux';
// import {getTopics}from'../../actions/topic_actions';

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        {
          title:
          "Java",
          image: require("../../Resources/css/img/java-icon-28.jpg"),
          description: "Java is sit amet consectetur adipisicing elit. Commodi deserunt eius quis, quasi placeat error cumque doloribus sed nam, omnis necessitatibus pariatur laudantium voluptatem, minima rerum autem nesciunt veniam vel!",
          currentRate: 1,
          comments: 1,
          linkTo:""
        },
        {
          title: "Food",
          image: require("../../Resources/css/img/food.png"),
          description:
            "Yham Yham Yham ,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deserunt eius quis, quasi placeat error cumque doloribus sed nam, omnis necessitatibus pariatur laudantium voluptatem, minima rerum autem nesciunt veniam vel!",
          currentRate: 100,
          comments: 120,
          linkTo:""
        },
        {
          title: "game",
          image: require("../../Resources/css/img/game.png"),
          description:
            "fun fun fun ,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deserunt eius quis, quasi placeat error cumque doloribus sed nam, omnis necessitatibus pariatur laudantium voluptatem, minima rerum autem nesciunt veniam vel!",
          currentRate: 1000,
          comments:300,
          linkTo:""


        },
        {
          title: "movie",
          image: require("../../Resources/css/img/image_not_availble.png"),
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi deserunt eius quis, quasi placeat error cumque doloribus sed nam, omnis necessitatibus pariatur laudantium voluptatem, minima rerum autem nesciunt veniam vel!",
          currentRate: 2,
          comments: 20,
          linkTo:""
        }
      ]
    };
  }
  // componentDidMount(){
  //   this.props.dispatch(getTopics());
  // }//waiting the date from server

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="banner1 col-2">
            <div className="d-flex flex-row align-items-stretch">
              <div />
            </div>
          </div>

          <div className="screen col-8">
            <div className="d-flex flex-column">
              <div className="screen">
                {this.state.topics.map((topic, i) => (
                  <Topic {...topic} key={i} />
                ))}
              </div>
            </div>
          </div>

          <div className="banner2 col-2">
            <div className="align-items-stretch">
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//as reference state all props --> topics by reducer
// const mapStateToProps = (state)=>{
//   return {
//     topics:state.topics
//   }
// }
// connect(mapStateToProps)
export default Forum;
