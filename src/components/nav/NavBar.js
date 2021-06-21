import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {

    const history = useHistory()

    return (
        <ul className="navbar">
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
