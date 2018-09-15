import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Friends from './Friends'
import Footer from '../../footer/Footer'

const FriendsPG = ({match}) => (
  console.log('match:', match),

  <div>
    <Switch>
      <Route exact path={`${match.url}`} component={Friends} />
    </Switch>
    <Route exact path={`${match.url}`} component={Footer} />
  </div>
)

export default FriendsPG
