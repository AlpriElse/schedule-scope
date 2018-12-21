import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Index from './Index'
import ExploreView from './ExploreView'

const AppRouter = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Illini Advisor</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/explore">Explore</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="masthead">
        <Route path="/" exact component={Index}/>
        <Route path="/explore" component={ExploreView}/>
      </div>
    </div>
  </Router>
)


export default AppRouter
