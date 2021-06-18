import React from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"

export const Deposit = ({deposit}) => {

    const history = useHistory()
    const urlPath = history.location.pathname
    // saves current location

    return (
    <>
    <section className="recentActivityCard">
        <h4>{deposit.name}</h4>
        <h4>{new Date (deposit.date).toLocaleDateString()}</h4>
        <h4>${deposit.total}</h4>
    </section>
    <div>
    {urlPath === "/recent_activity" ?
        <button onClick={() => history.push(`/recent_activity/edit_deposit/${deposit.id}`)}>Edit</button>
        :
    null
    }
    </div>
    </>
        )
}