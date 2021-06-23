import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Deposit } from "./Deposit"
import { Withdrawal } from "./Withdrawal"
import PigPlus from "../profile/PigPlus.png"
import PigMinus from "../profile/PigMinus.png"
import Milo from "../profile/Milo.png"
import "./Profile.css"
import { DepositEventContext } from "../deposits/DepositProvider"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ProfileList = () => {

    const { getProfile, profile, updateProfile, getProfileById } = useContext(ProfileContext)
    const { getDeposits, deposit_events } = useContext(DepositEventContext)
    const { getWithdrawals, withdrawal_events } = useContext(WithdrawalEventContext)

    const [ currency, setCurrency ] = useState([])
    // console.log(currency)
    const [ allDepositEvents, setAllDepositEvents ] = useState([])
    const [ allWithdrawalEvents, setAllWithdrawalEvents ] = useState([])
    const [ goalAmount, setGoalAmount ] = useState({
        amount: 0
    })
    // console.log("goal Amount" + goalAmount.amount)
    
    const history = useHistory()

    const handleSaveGoalAmount = () => {
        updateProfile({
            id: profile.saver.id,
            user: profile.saver.user,
            profile_image_url: profile.saver.profile_image_url,
            created_on: profile.saver.created_on,
            goal_amount: parseFloat(goalAmount.amount)
        })
    }

    const handleControlledInputChange = (event) => {
        const newAmountState = { ...goalAmount }
        newAmountState[event.target.name] = event.target.value
        setGoalAmount(newAmountState)
    }
    
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
        const allCurrency = deposit_events.map(dep => dep.currency)
        setCurrency(allCurrency)
    }, [deposit_events, withdrawal_events])

    // let audio = new Audio("")

    let totalWithdrawals = profile?.withdrawal_events?.reduce((total, event) => total+parseFloat(event.total), 0)
    let totalDeposits = profile?.deposit_events?.reduce((total, event) => total+parseFloat(event.total), 0)
    let currentSaved = totalDeposits - totalWithdrawals

    const saverGoalAmount = parseFloat(profile?.saver?.goal_amount)
    
    let progressMath = (currentSaved / saverGoalAmount) * 100
    let percent = parseFloat(progressMath.toFixed(2))
    // console.log(percent)



    return (
        <div className="profileList">
            <div className="headerDiv">
                <h1>Currency Kidz</h1>
                <h3>Welcome {profile.saver?.user.first_name}!!</h3>
            </div>
            <div className="imageDiv">
                <img className="milo image" alt="milo profile picture" src={Milo}></img>
                {saverGoalAmount === 0 ?
                <>
                <div className="goalAmountDiv">
                    <form className="goalAmountForm">
                        <fieldset className="goalAmountFieldset">
                            <label htmlFor="goalAmount" className="goalLabel">Let's Set A Savings Goal: $</label>
                            <input id="goalAmount" type="number"
                                    name="amount" placeholder="0.00"
                                    required autoFocus
                                    onChange={handleControlledInputChange}
                                    ></input>
                        </fieldset>
                    </form>
                </div>
                <div>
                    <button className="button goalAmountButton" onClick={handleSaveGoalAmount}>Set Goal</button>
                </div>
                </>
                :
                <article className="progressArticle">
                    <div>
                        <h3>You're Goal Progress</h3>
                    </div>
                    <div className="progressBarDiv">
                        <h2>${currentSaved}</h2>
                        <div className="progressBar">
                            <ProgressBar animated now={45} variant="info" now={percent} label={`${percent}%`} max="100"/>
                        </div>
                        <h2>${saverGoalAmount}</h2>
                    </div>      
                </article>
                }
                <div>
                    <Accordion>
                        <Col>
                            <Accordion.Toggle as={Col} variant="link" eventKey="0">
                                <section>
                                    <h2>Denomination Breakdown</h2>
                                    <div className="moreButtonDiv">
                                        <h7 className="accordionButton down"></h7>
                                        <h7>More</h7>
                                    </div>
                                </section>
                            </Accordion.Toggle>
                        </Col>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
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