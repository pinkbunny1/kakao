import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Friends from './Friends'
import Footer from '../../footer/Footer'

const FriendsPG = () => (

  <div>
    <Switch>
      <Route exact path='/friends' component={Friends} />
    </Switch>
    <Route exact path='/friends' component={Footer} />
  </div>
)

export default FriendsPG
