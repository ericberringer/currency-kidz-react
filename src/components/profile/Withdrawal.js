import React from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"

export const Withdrawal = ({withdrawal}) => {

    const history = useHistory()
    const urlPath = history.location.pathname    

    return (
    <>
    <section className="recentActivityCard">
        <h4>{withdrawal.name}</h4>
        <h4>{withdrawal.date}</h4>
        <h4>${withdrawal.total}</h4>
    </section>
    <div>
    {urlPath === "/recent_activity" ?
        <button onClick={() => history.push(`/recent_activity/edit_withdrawal/${withdrawal.id}`)}>Edit</button>
        :
    null
    }
    </div>
    </>
    )
}