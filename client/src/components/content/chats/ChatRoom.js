import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

import MsgTo from './MsgTo'
import MsgFrom from './MsgFrom'
const socket = socketIOClient('http://localhost:3001')

class ChatRoom extends Component {
  constructor() {
    super()
    this.message = React.createRef()
  }

  componentDidMount() {
    // From Server
    socket.on('chat message', ({msg, userId}) => {
      console.log(`Recieved From Server: ${msg} and socketID: ${userId}`)
    })
  }

  handleInputChange = (e) => {
    e.preventDefault()
    const msg = this.message.current.value
    console.log('Msg:',msg)

    // Sending to Server
    socket.emit('chat message', this.message.current.value)
    console.log('sending socket id:', socket.id)
  }


  render() {
    return(
      <div>
        <APPEND COMPONENT HERE BASED ON EVENTS !?!?!>
        <p className="user-name">You are now talking to {this.props.name}</p>
        <br/>
        <div className="type-message">
          {/* <!-- ICON --> */}
          <i className="fas fa-plus fa-lg"></i>

          {/* <!-- INPUT FIELD --> */}
          <div className="type-message__input">
            <form onSubmit={this.handleInputChange}>
              <input type="text" id="m" ref={this.message}/>
              <i className="far fa-smile"></i>
              <span className="type-message__input__record-btn">
                <i className="fas fa-microphone"></i>
              </span>
           </form>

          </div>
          {/* <!-- SMILEY ICON --> */}
          {/* <!-- RECORD BUTTON --> */}
        </div>
      </div>
    )
  }
}

export default ChatRoom
