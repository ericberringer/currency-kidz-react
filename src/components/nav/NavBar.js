import React from "react"
import { useHistory } from "react-router-dom"
import CKLogo from "./images/CKLogo.png"
import "./NavBar.css"

export const NavBar = (props) => {

    const history = useHistory()

    return (
        <ul className="navbar">
            <img className="navLogo" alt="logo" src={CKLogo}></img>
            <button className="button" onClick={() => history.push("/")}>Home</button>
            <button className="button" onClick={() => history.push("/learn")}>Learn</button>
            <button className="button" onClick={() => history.push("/recent_activity")}>Transactions</button>
            <button className="navbar__item button"
                    onClick={() => {
                        localStorage.removeItem("ck_user_id")
                        history.push({ pathname: "/" })
                    }}
            >Logout</button>
        </ul>
    )
}
