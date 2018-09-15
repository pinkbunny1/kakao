import React from 'react'
import { Switch, Route } from 'react-router-dom'

import More from './More'
import Footer from '../../footer/Footer'



// How to Divide routes for Nested Routes !!! https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

const MorePG = ({match}) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}`} component={More} />
    </Switch>
    <Route exact path={`${match.url}`} component={Footer} />
  </div>
)

export default MorePG
