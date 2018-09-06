import React from 'react'

const MsgTo = (props) => {
  console.log('Props from MsgTo:', props)
  return(
    <div className="chat__message chat__message--to">
        {/* <!-- LEFT --> */}
        <img src="../../../images/dog1.jpeg" alt="" className="chat__message__user-image user-image"/>

        {/* <!-- CENTER --> */}
        <div className="chat__message-center">
          <h3 className="chat__message__user-name user-name">{props.username}</h3>
          <span className="chat__message__text">{props.msg.msg}</span>
        </div>

        {/* <!-- RIGHT --> */}
        <div className="chat__message_time__container">
          <span className="chat__message__time">
            {props.msg.msgTime}
          </span>
        </div>
    </div>
  )
}

export default MsgTo
