import React, { Component } from "react"
import UserContext from "./UserContext"
import { getCookieValueForName } from "../authentication/getCookieValueForName"

class UserProvider extends Component {
	constructor(props) {
		super(props)

		const token = getCookieValueForName("token")
		const isAuthenticatedState = token !== ""

		this.state = {
			isAuthenticated: isAuthenticatedState,
			token,
		}
        
		this.setUserToken = this.setUserToken.bind(this)
	}
    
	setUserToken(token) {
		this.setState({
			isAuthenticated: true,
			token
		})
	}

	revokeAccess() {

	}

	render() {
		return (
			<UserContext.Provider
				value={{
					token: this.state.token,
					isAuthenticated: this.state.isAuthenticated,
					setUserToken: this.setUserToken,
				}}
			>
				{this.props.children}
			</UserContext.Provider>
		)
	}
}

export default UserProvider