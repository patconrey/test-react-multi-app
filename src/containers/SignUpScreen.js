import React, { useState } from "react"
import handleSignUp from "../authentication/handleSignUp"
import { Redirect } from "react-router-dom"
import "../styles/main.scss"

const SignUpScreen = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ name, setName ] = useState("")
    const [ wasRegistrationSuccessful, setWasRegistrationSuccessful ] = useState(false)

    const handleTextDidChange = event => {
        switch (event.target.name) {
            case "email":
                setEmail(event.target.value)
            case "password":
                setPassword(event.target.value)
            case "name":
                setName(event.target.value)
            default:
                break;
        }
    }

    const handleFormDidSubmit = async event => {
        event.preventDefault()
        try {
            const result = await handleSignUp({ email, password, name })

            if (result) {
                const { user, success } = result

                if (success) {
                    setWasRegistrationSuccessful(true)
                }
            }
        } catch (error) {
            console.log(`error: ${error}`)
        }
    }

    const RedirectToSignIn = () => wasRegistrationSuccessful
        ? <Redirect to={"/sign-in"} />
        : null

    return(
        <section className="section">
        <RedirectToSignIn />
            <div className="authentication">
                <h1 className="header authentication__title">Sign Up</h1>
                <form className="authentication__form" onSubmit={handleFormDidSubmit}>
                    <div className="input-group">
                        <label htmlFor="sign-in-email" className="input-group__label">Email</label>
                        <input name="email" id="sign-in-email" type="email" className="input-group__input" placeholder="Email" onChange={handleTextDidChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="sign-in-name" className="input-group__label">Name</label>
                        <input name="name" id="sign-in-name" type="text" className="input-group__input" placeholder="Name" onChange={handleTextDidChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="sign-in-password" className="input-group__label">Password</label>
                        <input name="password" id="sign-in-password" type="password" className="input-group__input" placeholder="Password" onChange={handleTextDidChange}/>
                    </div>
                    <button className="button button--green button--outline button--float-end">Sign Up &rarr;</button>
                </form>
            </div>
        </section>
    )
}

export default SignUpScreen