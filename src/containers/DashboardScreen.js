import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import UserContext from "../contexts/UserContext"

const DashboardScreen = () => {
    const { isAuthenticated } = useContext(UserContext)
    const RedirectToAuthentication = () => isAuthenticated
        ? null
        : <Redirect to={"/sign-in"} />

    return(
        <div className="section">
            <RedirectToAuthentication />
            <h1 className="header">An authenticated portion of the application.</h1>
        </div>
    )
}

export default DashboardScreen