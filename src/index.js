import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Screen1 from './views/screen1'
import Screen3 from './views/screen3'
import Screen2 from './views/screen2'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Screen1} exact path="/screen1" />
        <Route component={Screen3} exact path="/screen3" />
        <Route component={Screen2} exact path="/screen2" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
