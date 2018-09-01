import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'

import MainHeader from '../components/header/MainHeader'
import MainContent from '../components/content/MainContent'
import Footer from '../components/footer/Footer'

const PageNotFound = () => {
  return(
    <div>
      <h2>Page Not Found 404 !</h2>
      <br/>
      <Link to="/">Back Home</Link>
      <br/>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight:'bold',
          color:'red'
        }}
      >Back Home</NavLink>
    </div>

  )
}

const AppRouter = () => {

    // probably only want this in browsers that don’t support the HTML5 history API.
    const supportsHistory = 'pushState' in window.history
  return(
    <div>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
          <Route component={MainHeader}/>
            <Switch>
              <Route
                strict sensitive
                exact path='/'
                render={(props) => <MainContent {...props} searchBar={true} page='friends'/>}
              />

              <Route
                strict sensitive
                exact path='/chats'
                render={(props) => <MainContent {...props}
                searchBar={true} page='chats'/>}

              />

              <Route
                strict sensitive
                exact path='/find'
                render={(props) => <MainContent {...props}
                searchBar={false} page='find'/>}

              />

              <Route
                strict sensitive
                exact path='/more'
                render={(props) => <MainContent {...props}
                searchBar={false} page='more'/>}
              />

              <Route
                strict sensitive
                exact path='/chatroom'
                render={(props) => <MainContent {...props}
                searchBar={false} page='chatroom'/>}
              />

              <Route component={PageNotFound} />
            </Switch>
          <Route render={(props)=><Footer {...props}/>}/>
        </div>
      </BrowserRouter>
    </div>
  )
}


export default AppRouter
