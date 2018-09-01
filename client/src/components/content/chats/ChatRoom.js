import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

class Chatroom extends Component {
  componentDidMount() {
    // const socket= socketIOClient
  }
  render() {
    return(
      <div>
        <br/>
        <div className="type-message">
          {/* <!-- ICON --> */}
          <i className="fas fa-plus fa-lg"></i>
          {/* <!-- INPUT FIELD --> */}
          <div className="type-message__input">
            <input type="text" id="m" />
            <i className="far fa-smile"></i>
            <span className="type-message__input__record-btn">
              <i className="fas fa-microphone"></i>
            </span>
          </div>
          {/* <!-- SMILEY ICON --> */}
          {/* <!-- RECORD BUTTON --> */}
        </div>
      </div>
    )
  }
}

export default ChatRoom
