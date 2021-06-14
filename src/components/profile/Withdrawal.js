import React from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"

export const Withdrawal = ({withdrawal}) => {
    

    return (
    <>
    <section className="recentActivityCard">
        <h4>{withdrawal.name}</h4>
        <h4>{withdrawal.date}</h4>
        <h4>{withdrawal.total}</h4>
    </section>
    </>
    )
}