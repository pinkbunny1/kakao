import React from 'react'

const MsgFrom = (props) => {
  return(
    <div class="chat__message chat__message--from">
       <span class="chat__message__time">
         17:55
       </span>
       <span class="chat__message__text">{props.message}</span>
   </div>
  )

}


export default MsgFrom
