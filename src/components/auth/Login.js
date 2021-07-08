import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import NavLogo from "./images/CurrencyKidzNavLogo.png"
import "./Auth.css"


export const Login = () => {

    const email = useRef()
    const password = useRef()
    const invalidDialog = useRef()

    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("https://currency-kidz.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("ck_user_id", res.token )
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section className="loginFormSection">
                <form className="form--login" onSubmit={handleLogin}>
                    <img className="loginLogo" alt="logo" src={NavLogo}></img>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="text" value="milo@bud.com" id="email" className="form-control"  placeholder="Email address" required autoFocus readOnly />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" value="currency!16!@87" id="password" className="form-control"  placeholder="Password" required readOnly />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <button className="button loginButton" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            {/* <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section> */}
        </main>
    )
}
