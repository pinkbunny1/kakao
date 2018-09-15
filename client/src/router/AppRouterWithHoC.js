import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'

import MainHeader from '../components/header/MainHeader'
import Footer from '../components/footer/Footer'

import FriendsPG from '../components/content/friends'
import Chats from '../components/content/chats'
import Finds from '../components/content/find'
import MorePG from '../components/content/more'

const PageNotFound = () => {
  return (
    <div>
      <h2>Page Not Found 404 !</h2>
      <br />
      <Link to="/">Back Home</Link>
      <br />
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
      >
        Back Home
      </NavLink>
    </div>
  )
}

// HOC to create layout
const Layout = Component => props => {
  return (
    <div>
      <MainHeader />
      <Component {...props} />
      <Footer />
    </div>
  )
}

// Another HOC to create layout without footer
const LayoutWithoutFooter = Component => props => {
  return (
    <div>
      <MainHeader />
      <Component {...props} />
    </div>
  )
}

const AppRouter = () => {
  // probably only want 'Force Refresh' in browsers that don’t support the HTML5 history API.
  const supportsHistory = 'pushState' in window.history
  return (
    <div>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
          <Switch>
            <Route path="/friends" component={FriendsPG} />

      		// @ here is how to use those 2 HOCs

            <Route exact path="/chats" component={Layout(ChatsList)} />
            <Route
              path="/chats/:name"
              component={LayoutWithoutFooter(ChatRoom)}
            />

            <Route
              // Not strict Rule and Chats component further filters the rules
              path="/find"
              component={Finds}
            />

            <Route path="/more" component={MorePG} />

            <Route component={PageNotFound} />
          </Switch>
          {/* <Route render={(props)=><Footer {...props}/>}/> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
