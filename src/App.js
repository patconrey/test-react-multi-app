import React, { Component} from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"
import UserProvider from "./contexts/UserProvider"
import SignIn from "./containers/SignInScreen"
import SignUp from "./containers/SignUpScreen"
import DashboardScreen from "./containers/DashboardScreen"

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <UserProvider>
            <Switch>
              <Route path={"/"} exact component={DashboardScreen}/>
              <Route path={"/sign-in"} exact component={SignIn}/>
              <Route path={"/sign-up"} exact component={SignUp}/>
            </Switch>
          </UserProvider>
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)