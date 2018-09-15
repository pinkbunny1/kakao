import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ChatRoom from './ChatRoom'
import ChatsList from './ChatsList'
import Footer from '../../footer/Footer'

// How to Divide routes for Nested Routes !!! https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

const Chats = ({match}) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}`} component={ChatsList} />
      <Route path={`${match.url}/:name`}component={ChatRoom} />
    </Switch>
    <Route exact path={`${match.url}`} component={Footer} />
  </div>

)

export default Chats
