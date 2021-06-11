import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Deposit } from "./Deposit"
import Withdrawal from "./Withdrawal"
import PigPlus from "../profile/PigPlus.png"
import PigMinus from "../profile/PigMinus.png"
import Milo from "../profile/Milo.png"
// import ""./Profile.css""
import { DepositEventContext } from "../deposits/DepositProvider"

export const ProfileList = () => {

    const { getProfile, profile } = useContext(ProfileContext)
    const { getDeposits, deposit_events } = useContext(DepositEventContext)

    const [ allDepositEvents, setAllDepositEvents ] = useState([])
    console.log(allDepositEvents)

    useEffect(() => {
        getProfile()
        .then(getDeposits)
    }, [])

    useEffect(() => {
        const allDeposits = deposit_events.filter(dep => dep.total > 0)
        setAllDepositEvents(allDeposits)
    }, [])

    return (
        <div className="profileList">
            <div className="headerDiv">
                <h1>Currency Kidz</h1>
                <h3>Welcome {profile.saver?.user.first_name}!!</h3>
            </div>
            <div className="imageDiv">
                <img className="milo image" alt="milo profile picture" src={Milo}></img>
                <img className="piggyBank image" alt="piggy bank deposit" src={PigPlus}></img>
                <h3>Start a New Deposit!!</h3>
                <img className="piggyBank image withdrawalPig" alt="piggy bank withdrawal" src={PigMinus}></img>
                <h3>Start a New Withdrawal!!</h3>
            </div>
            <div className="recentActivity">
                <h3>Recent Activity</h3>
            </div>
            <div className="recentActivityTitles">
                <h4>Name</h4>
                <h4>Date</h4>
                <h4>Amount</h4>
            </div>
            <div className="recentDepositDiv recentTransactions">
                {
                    allDepositEvents.map(depositPost => <Deposit key={depositPost.id} deposit={depositPost} />)
                }
            </div>
            <div className="recentWithdrawalDiv recentTransactions">
                <h4>Withdrawals go here</h4>
            </div>
        </div>
    )
}