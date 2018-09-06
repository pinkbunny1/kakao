import React, { Component } from 'react'
import io from "socket.io-client";

import MsgTo from './MsgTo'
import MsgFrom from './MsgFrom'
const socketClient = io('http://localhost:3001')


// 1. componentDidMount() 에서 소켓 이벤트('recieve message from server')를 기다립니다. 유저가 인풋에 메세지를 쓰기전에 이벤트가 없습니다

// 2. _handleFormSubmit() 유저가 메세지를 쓰면, 폼에서 섯밋 이벤트로 이 함수를 부릅니다. 이함수는 소켓이벤트('send message to server')를 메세지와 함께 보냅니다. 그리고 _recordMainUserId(socketClient.id) 함수로 state.mainUserId 값을 엡뎃합니다. 보낸사람의 소켓아이디가 메인유저아디가 됩니다. 이번 처음 메세지 보낼때 딱 1번 엡뎁됩니다.

// 3. 서버에서 소켓이 'send message to server'이벤트를 받고 다시 'recieve message from server'이벤트를 아이디와 소케아이디를 클라이언트에 보냅니다. 클라이언트는 받구 ...

// 4. _updateMsgState(msg, userId) 함수를 부릅니다. 여기서 state에 있는 messages인 리스트에 오브젝트로 msg와 userId 를 넣습니다.

// 5. 마지막으로 <main className="chat"> 밑에 있는 this._handleMsgCompos() 함수를 불러 차일트 컴포넌트를 부릅니다.


class ChatRoom extends Component {
  constructor(props) {
    super(props)
    // this.message = React.createRef()
    this.state = {
      messages: [], //메세지 아이템 structure: [{ msg:'hello', userId:'asdfasjdkfljwle', msgTime:'...' }]
      mainUserId: false,
      tempMsg : '',
      tempUserName: props.name

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
      return messages.map(msg => (
       msg.userId === mainUserId ?  <MsgFrom msg={msg} /> :  <MsgTo msg={msg} username={tempUserName} />
     ))

     //  return messages.map(msg => {
     //    console.log('allows extra?')
     //    return msg.userId === mainUserId ?  <MsgFrom msg={msg} /> :  <MsgTo msg={msg} />
     // })
    }
  }



  render() {
    const { tempMsg } = this.state
    return(
      <div>
        <p className="user-name">You are now talking to {this.props.name}</p>
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
            <form onSubmit={this._handleFormSubmit}>
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
