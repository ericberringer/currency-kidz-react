import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "../profile/ProfileProvider"
import { Deposit } from "../profile/Deposit"
import { Withdrawal } from "../profile/Withdrawal"
import Milo from "../profile/Milo.png"
// import ""./Profile.css""
import { DepositEventContext } from "../deposits/DepositProvider"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"

export const RecentActivityList = () => {

    const { getProfile, profile } = useContext(ProfileContext)
    const { getDeposits, deposit_events } = useContext(DepositEventContext)
    const { getWithdrawals, withdrawal_events } = useContext(WithdrawalEventContext)

    const [ allDepositEvents, setAllDepositEvents ] = useState([])
    const [ allWithdrawalEvents, setAllWithdrawalEvents ] = useState([])

    const history = useHistory()
    console.log(withdrawal_events)

    useEffect(() => {
        getProfile()
        .then(getDeposits)
            .then(getWithdrawals)
    }, [])

    useEffect(() => {
        const allDeposits = deposit_events.filter(dep => dep.total > 0)
        setAllDepositEvents(allDeposits)
        const allWithdrawals = withdrawal_events.filter(dep => dep.total > 0)
        setAllWithdrawalEvents(allWithdrawals)
    }, [deposit_events, withdrawal_events])


    return (
        <div className="profileList">
            <div className="headerDiv">
                <h1>All Activities</h1>
                <h3>Hey {profile.saver?.user.first_name}!! Let's see what you have been up to.</h3>
            </div>
            <div className="imageDiv">
                <img className="milo image" alt="milo profile picture" src={Milo}></img>
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
                    allDepositEvents?.map(depositPost => <Deposit key={depositPost.id} deposit={depositPost} />)
                }
            </div>
            <div className="recentWithdrawalDiv recentTransactions">
                {
                    allWithdrawalEvents?.map(withdrawalPost => <Withdrawal key={withdrawalPost.id} withdrawal={withdrawalPost} />)
                }
            </div>
        </div>
    )
}