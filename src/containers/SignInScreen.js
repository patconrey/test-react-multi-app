import React, { useState, useContext } from "react"
import handleSignIn from "../authentication/handleSignIn"
import { Redirect } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import "../styles/main.scss"

const SignInScreen = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ wasSignInSuccessful, setWasSignInSuccessful ] = useState(false)
    const { setUserToken, isAuthenticated, token } = useContext(UserContext)

    const handleTextDidChange = event => {
        switch (event.target.name) {
            case "email":
                setEmail(event.target.value)
            case "password":
                setPassword(event.target.value)
            default:
                break;
        }
    }

    const handleFormDidSubmit = async event => {
        event.preventDefault()
        try {
            const result = await handleSignIn({ email, password })

            if (result) {
                const { user, token } = result
                document.cookie = `token=${token}`
                setUserToken(token)
                setWasSignInSuccessful(true)
            }
        } catch (error) {
            console.log(`error: ${error}`)
        }
    }

    const RedirectToApplication = () => wasSignInSuccessful || isAuthenticated
        ? <Redirect to={"/application"} />
        : null

    return(
        <section className="section">
            <RedirectToApplication />
            <div className="authentication">
                <h1 className="header authentication__title">Sign In</h1>
                <form className="authentication__form" onSubmit={handleFormDidSubmit}>
                    <div className="input-group">
                        <label htmlFor="sign-in-email" className="input-group__label">Email</label>
                        <input name="email" id="sign-in-email" type="email" className="input-group__input" placeholder="Email" onChange={handleTextDidChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="sign-in-password" className="input-group__label">Password</label>
                        <input name="password" id="sign-in-password" type="password" className="input-group__input" placeholder="Password" onChange={handleTextDidChange}/>
                    </div>
                    <button className="button button--green button--outline button--float-end">Sign In &rarr;</button>
                </form>
            </div>
        </section>
    )
}

export default SignInScreen