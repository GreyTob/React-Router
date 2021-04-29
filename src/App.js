import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={"homeActive"}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{color: 'blue'}}
              >About</NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: '/cars',
                  // search: '?a=1&b=2',
                  // hash: 'wfm-hash'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <Switch>
          {/*localhost:3000*/}
          <Route path="/" exact render={()=> <h1>Home Page from Route</h1>} />

          <Route path="/about" component={About} />
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />

          <Redirect  to="/" />
          {/*<Redirect from="/about" to="/cars" />*/}

          {/*<Route render={()=> <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1> } />*/}
        </Switch>




      </div>
    );
  }
}

export default App
