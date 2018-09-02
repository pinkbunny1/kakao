import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

import MsgTo from './MsgTo'
import MsgFrom from './MsgFrom'

class ChatRoom extends Component {
  constructor() {
    super()
    this.message = React.createRef()
    this.state = {
      response: false,
      endpoint: 'http://localhost:3001'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on('chat message', ({msg, userId}) => {
      console.log('hi from client:',msg,userId)

      console.log('id:', socket.id)
    })

  }


  handleInputChange = (e) => {
    e.preventDefault()
    console.log('e.target.value',e.target)
    const a = this.message.current.value
    console.log(a)
    const socket = socketIOClient(this.state.endpoint)

    // Sending to Server
    socket.emit('chat message', this.message.current.value)


  }
  render() {
    return(
      <div>
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
