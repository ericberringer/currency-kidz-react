import React, { useContext } from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"
import { DepositEventContext } from "../deposits/DepositProvider"

export const Deposit = ({deposit}) => {

    const { deleteDeposit } = useContext(DepositEventContext)

    const history = useHistory()
    const urlPath = history.location.pathname
    // saves current location

    const handleDelete = () => {
        deleteDeposit(deposit.id)
    }

    return (
    <>
    <section className="recentActivityCard">
        <div className="recentColumn">
            <h4>{deposit.name}</h4>
        </div>
        <div className="recentColumn">
            <h4>{new Date (deposit.date).toLocaleDateString()}</h4>
        </div>
        <div className="recentColumn">
            <h4>${deposit.total}</h4>
        </div>
    </section>
    <div>
    {urlPath === "/recent_activity" ?
    <div className="editDeleteButtonDiv">
        <button className="editButton" onClick={() => history.push(`/recent_activity/edit_deposit/${deposit.id}`)}>Edit</button>
        <button className="deleteButton" onClick={handleDelete}>Delete</button>
    </div>
        :
    null
    }
    </div>
    </>
        )
}