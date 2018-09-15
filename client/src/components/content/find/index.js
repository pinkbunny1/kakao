import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchBarHeader from '../others/SearchBarHeader'

import Find from './Find'
import Footer from '../../footer/Footer'


// How to Divide routes for Nested Routes !!! https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

const Finds = ({match}) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}`} component={Find} />
      {/* <Route path='/chats/:name' component={ChatRoom} /> */}
    </Switch>
    <Route exact path={`${match.url}`} component={Footer} />
  </div>
)

export default Finds
