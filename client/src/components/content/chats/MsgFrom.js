import React from 'react'

const MsgFrom = (props) => {
 console.log('Props from MsgFrom', props)
  return(
    <div className="chat__message chat__message--from">
       <span className="chat__message__time">
         {props.msg.msgTime}
       </span>
       <span className="chat__message__text">{props.msg.msg}</span>
   </div>
  )

}


export default MsgFrom
