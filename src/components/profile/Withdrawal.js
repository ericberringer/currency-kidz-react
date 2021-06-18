import React, { useContext } from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"

export const Withdrawal = ({withdrawal}) => {

    const { deleteWithdrawal } = useContext(WithdrawalEventContext)

    const history = useHistory()
    const urlPath = history.location.pathname
    
    const handleDelete = () => {
        deleteWithdrawal(withdrawal.id)
    }

    return (
    <>
    <section className="recentActivityCard">
        <div className="recentColumn">
            <h4>{withdrawal.name}</h4>
        </div>
        <div className="recentColumn">
            <h4>{new Date (withdrawal.date).toLocaleDateString()}</h4>
        </div>
        <div className="recentColumn">
            <h4>${withdrawal.total}</h4>
        </div>
    </section>
    <div>
    {urlPath === "/recent_activity" ?
    <div className="editDeleteButtonDiv">
        <button className="editButton" onClick={() => history.push(`/recent_activity/edit_withdrawal/${withdrawal.id}`)}>Edit</button>
        <button className="deleteButton" onClick={handleDelete}>Delete</button>
    </div>
        :
    null
    }
    </div>
    </>
    )
}