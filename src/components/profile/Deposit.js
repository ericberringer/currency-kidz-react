import React from "react"
import "./Profile.css"
import { Link } from "react-router-dom"

export const Deposit = ({deposit}) => (
    <section className="recentDeposits">
        <h4>{deposit.name}</h4>
        <h4>{deposit.date}</h4>
        <h4>{deposit.total}</h4>
    </section>
)