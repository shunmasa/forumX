import React, { Component } from "react";
import "./comments.scss";
import Grid from "@material-ui/core/Grid";

import image from "../../Resources/css/img/java-icon-28.jpg";
import Modal from "../modal/Modal";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
     <Grid item>
      <div className="wrapper-root">  
        <div className="wrapper-paper">   
            
            <Grid item>
              <div className="wrapper-image">
                <img className="wrapper-img" alt="" src={image} />
              </div>
            </Grid>
            
            <Grid item>
                  <div
                    className="wrapper-title"
                    
                  >
                    Java
                    <div className="wrapper-rating">
                      Current Rating <span class="wonderful">1</span>
                    </div>
                  </div>
              

               
                  <div className="wrapper-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque iste expedita voluptatem aut praesentium dignissimos
                    odit nesciunt, autem sed Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Itaque iste expedita
                    voluptatem aut praesentium dignissimos odit nesciunt, autem
                    sed
                  </div>
                 

                  <div className="wrapper-section ">
                    Expand comments section
                   
                    <div>
                      {this.state.isShowing ? (
                        <div
                          onClick={this.closeModalHandler}
                          className="back-drop"
                        />
                      ) : null}

                      <button 
                        className="open-modal-btn"
                        onClick={this.openModalHandler}
                      >
                        Add Comments
                      </button>
                      <Modal
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}
                      />
                    </div>
                 </div>
                </Grid>



                </div>
              </div>
                 </Grid> 
            
      
    );
  }
}
export default Content;
