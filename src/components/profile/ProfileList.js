import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Deposit } from "./Deposit"
import { Withdrawal } from "./Withdrawal"
import PigPlus from "../profile/PigPlus.png"
import PigMinus from "../profile/PigMinus.png"
import Milo from "../profile/Milo.png"
// import ""./Profile.css""
import { DepositEventContext } from "../deposits/DepositProvider"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"

export const ProfileList = () => {

    const { getProfile, profile } = useContext(ProfileContext)
    const { getDeposits, deposit_events } = useContext(DepositEventContext)
    const { getWithdrawals, withdrawal_events } = useContext(WithdrawalEventContext)
    
    const [ allDepositEvents, setAllDepositEvents ] = useState([])
    const [ allWithdrawalEvents, setAllWithdrawalEvents ] = useState([])
    
    const history = useHistory()
    
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

    // let audio = new Audio("")

    let totalWithdrawals = profile?.withdrawal_events?.reduce((total, event) => total+parseFloat(event.total), 0)
    let totalDeposits = profile?.deposit_events?.reduce((total, event) => total+parseFloat(event.total), 0)
    let currentSaved = totalDeposits - totalWithdrawals


    return (
        <div className="profileList">
            <div className="headerDiv">
                <h1>Currency Kidz</h1>
                <h3>Welcome {profile.saver?.user.first_name}!!</h3>
            </div>
            <div className="imageDiv">
                <img className="milo image" alt="milo profile picture" src={Milo}></img>
                <h2>You have saved ${currentSaved}!!</h2>
                <img className="piggyBank image" alt="piggy bank deposit" src={PigPlus}
                    onClick={() => history.push("/create/deposit_event")
                        // audio.play()
                }></img>
                <h3>Start a New Deposit!!</h3>
                <img className="piggyBank image withdrawalPig" alt="piggy bank withdrawal" src={PigMinus}
                    onClick={() => history.push("/create/withdrawal_event")}></img>
                <h3>Start a New Withdrawal!!</h3>
            </div>
            <div className="recentActivity">
                <h3 className="underline">Your Deposits</h3>
            </div>
            <div className="recentActivityTitles">
                <h4 className="underline">Name</h4>
                <h4 className="underline">Date</h4>
                <h4 className="underline">Amount</h4>
            </div>
            <div className="recentDepositDiv recentTransactions">
                {
                    allDepositEvents?.map(depositPost => <Deposit key={depositPost.id} deposit={depositPost} />) 
                        
                }
            </div>
            <div className="recentActivity">
                <h3 className="underline">Your Withdrawals</h3>
            </div>
            <div className="recentActivityTitles withdrawalTitles">
                <h4 className="underline">Name</h4>
                <h4 className="underline">Date</h4>
                <h4 className="underline">Amount</h4>
            </div>
            <div className="recentWithdrawalDiv recentTransactions">
                {
                    allWithdrawalEvents?.map(withdrawalPost => <Withdrawal key={withdrawalPost.id} withdrawal={withdrawalPost} />)
                }
            </div>
            <div>
                <button className="activityButton button" onClick={() => history.push(`/recent_activity`)}>All Activity</button>
            </div>
        </div>
    )
}