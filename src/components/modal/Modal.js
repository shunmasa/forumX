import React from 'react';

import './Modal.css';

const Modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>New Comment</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                   
                </div>
                
                <textarea className="modal-body"cols="30" rows="5" placeholder="I was lazy , so here's no text !!">
                  {props.children}</textarea> 
                   
                
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>Negative</button>
                    <button className="btn-continue">Positive</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

