import React, { Component} from "react"
import { hot } from "react-hot-loader"
import "./styles/layout/_layout.scss"

class App extends Component{
  render(){
    return(
      <div className="container">
        <h1> Hello, World!</h1>
      </div>
    )
  }
}

export default hot(module)(App)