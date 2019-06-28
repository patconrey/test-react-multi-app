import UserContext from "./UserContext"
import React from "react"

export default Component => props => (
	<UserContext.Consumer>
		{context => <Component {...props} {...context} />}
	</UserContext.Consumer>
)