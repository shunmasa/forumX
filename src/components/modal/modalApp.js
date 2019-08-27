// import React, { Component } from 'react';

// import Modal from './Modal';

// class modalApp extends Component {

//     constructor() {
//         super();

//         this.state = {
//             isShowing: false
//         }
//     }

//     openModalHandler = () => {
//         this.setState({
//             isShowing: true
//         });
//     }

//     closeModalHandler = () => {
//         this.setState({
//             isShowing: false
//         });
//     }

//     render () {
//         return (
//             <div>
//              { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
              
//                 <button className="open-modal-btn" onClick={this.openModalHandler}>Add Comments</button>

//                 <Modal
//                     className="modal"
//                     show={this.state.isShowing}
//                     close={this.closeModalHandler}>
//                        </Modal>
//             </div>
//         );
//     }
// }

// export default modalApp;
