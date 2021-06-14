import React from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"

export const Deposit = ({deposit}) => {



    return (
        <>
    <section className="recentActivityCard">
        <h4>{deposit.name}</h4>
        <h4>{deposit.date}</h4>
        <h4>${deposit.total}</h4>
    </section>
    </>
        )
}