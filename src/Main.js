import React,{Component} from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'

const Main = () => {
  return(
    <Router>
      <Route exact path="/login" component={Login}  />
    </Router>
  )
}

export default Main
