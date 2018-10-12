import React, { Component } from 'react'
import io from "socket.io-client";

import MsgTo from './MsgTo'
import MsgFrom from './MsgFrom'
const socketClient = io('http://localhost:3001')


class ChatRoom extends Component {
  constructor(props) {
    console.log('params:',props.match.params.name)
    super(props)
    this.state = {
      messages: [], //메세지 아이템 structure: [{ msg:'hello', userId:'asdfasjdkfljwle', msgTime:'...' }]
      mainUserId: false,
      tempMsg : '',
      tempUserName: props.match.params.name

    }
  }




  _updateMsgState = (msg, userId, msgTime) => {
    const newItem = { msg, userId, msgTime }
    // https://discuss.reactjs.org/t/setstate-function/5162/2
    // https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
    this.setState({
      messages: [
        ...this.state.messages,
        newItem
      ]
    })
  }



  _recordMainUserId = (userId) => {
    const { mainUserId } = this.state
    mainUserId ? '' : this.setState({mainUserId:userId})
  }



  componentDidMount() {
    // From Server, 서버에서 소켓이벤트 'recieve message from server'를 받습니다.
    socketClient.on('recieve message from server', ({msg, userId}) => {
      const msgTime = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
      console.log(`Recieved From Server: ${msg} and socketID: ${userId}`)
      this._updateMsgState(msg, userId, msgTime)

    })
  }



  _handleFormSubmit = (e) => {
    e.preventDefault()
    const {tempMsg} = this.state
    // const msg = this.message.current.value

    // Sending to Server
    socketClient.emit('send message to server', tempMsg)
    console.log('sending socket id:', socketClient.id)
    this._recordMainUserId(socketClient.id)
    this.setState({
      tempMsg: ''
    })
  }



  _handleInputChange = (e) => {
    // e.preventDefault()
    this.setState({tempMsg: e.target.value})
    console.log('This is state:', this.state.tempMsg)
  }



  _handleMsgCompos = () => {
    console.log('***Handle Msg Component')
    const { messages, mainUserId, tempUserName } = this.state
    if (messages.length) {
      // 에로우함수 리턴 괄호 사용법: https://stackoverflow.com/questions/28889450/when-should-i-use-return-in-es6-arrow-functions
      return messages.map((msg, idx) => (
       msg.userId === mainUserId ?  <MsgFrom key={idx} msg={msg} /> :  <MsgTo key={idx} msg={msg} username={tempUserName} />
     ))

     //  return messages.map(msg => {
     //    console.log('allows extra?')
     //    return msg.userId === mainUserId ?  <MsgFrom msg={msg} /> :  <MsgTo msg={msg} />
     // })
    }
  }



  render() {
    const { tempMsg, tempUserName } = this.state
    return(
      <div>
        <p className="user-name">You are now talking to {tempUserName}</p>
        <main className="chat">
          {/* <APPEND COMPONENT HERE BASED ON EVENTS !?!?!/> */}

          {/* { messages.map(msg => {
            msg.userId === mainUserId ? <MsgFrom msg={msg} /> : <MsgTo msg={msg} />
          })} */}

          {this._handleMsgCompos()}
        </main>

        <br/>
        <div className="type-message">
          {/* <!-- ICON --> */}
          <i className="fas fa-plus fa-lg"></i>

          {/* <!-- INPUT FIELD --> */}
          <div className="type-message__input">
            <form onSubmit={this._handleFormSubmit} autocomplete="off">
              <input type="text" id="m" value={tempMsg} onChange={this._handleInputChange}/>
            </form>
          </div>


          {/* <!-- SMILEY ICON --> */}
          <i className="far fa-smile"></i>

          {/* <!-- RECORD BUTTON --> */}
          <span className="type-message__input__record-btn">
            <i className="fas fa-microphone"></i>
          </span>
        </div>
      </div>
    )
  }
}

export default ChatRoom
