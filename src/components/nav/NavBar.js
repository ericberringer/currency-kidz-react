import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {

    const history = useHistory()

    return (
        <ul className="navbar">
            <button className="navbar__item button"
                    onClick={() => {
                        localStorage.removeItem("ck_user_id")
                        history.push({ pathname: "/" })
                    }}
            >Logout</button>
        </ul>
    )
}
