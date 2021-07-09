import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Deposit } from "./Deposit"
import { Withdrawal } from "./Withdrawal"
import { DepositEventContext } from "../deposits/DepositProvider"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"
import PigPlus from "./images/PigPlus.png"
import PigMinus from "./images/PigMinus.png"
import PigCongrats from "./images/PigCongrats.png"
import Milo from "../profile/Milo.png"
import Penny from "./images/Penny.png"
import Nickel from "./images/Nickel.png"
import Dime from "./images/Dime.png"
import Quarter from "./images/Quarter.png"
import Dollar from "./images/Dollar.png"
import Five from "./images/Five.jpeg"
import Ten from "./images/Ten.jpeg"
import Twenty from "./images/Twenty.jpeg"
import Fifty from "./images/Fifty.jpeg"
import Hundred from "./images/Hundred.jpeg"
import Title from "./images/CurrencyKidzLogo.png"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./Profile.css"

export const ProfileList = () => {

    const { getProfile, profile, updateProfile } = useContext(ProfileContext)
    const { getDeposits, deposit_events } = useContext(DepositEventContext)
    const { getWithdrawals, withdrawal_events } = useContext(WithdrawalEventContext)

    const [ currency, setCurrency ] = useState([])

    const [ allDepositEvents, setAllDepositEvents ] = useState([])
    const [ allWithdrawalEvents, setAllWithdrawalEvents ] = useState([])
    const [ goalAmount, setGoalAmount ] = useState({
        amount: 0.00
    })
    // console.log("goal Amount" + goalAmount.amount)
    
    const history = useHistory()

    const handleSaveGoalAmount = () => {
        updateProfile({
            id: profile.saver.id,
            user: profile.saver.user,
            // profile_image_url: profile.saver.profile_image_url,
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

    let totalPennies = currency.reduce((total, event) => total+event.penny, 0)
    let totalNickels = currency.reduce((total, event) => total+event.nickel, 0)
    let totalDimes = currency.reduce((total, event) => total+event.dime, 0)
    let totalQuarters = currency.reduce((total, event) => total+event.quarter, 0)
    let totalDollars = currency.reduce((total, event) => total+event.one_dollar, 0)
    let totalFives = currency.reduce((total, event) => total+event.five_dollars, 0)
    let totalTens = currency.reduce((total, event) => total+event.ten_dollars, 0)
    let totalTwenties = currency.reduce((total, event) => total+event.twenty_dollars, 0)
    let totalFifties = currency.reduce((total, event) => total+event.fifty_dollars, 0)
    let totalHundreds = currency.reduce((total, event) => total+event.one_hundred_dollars, 0)

    const saverGoalAmount = parseFloat(profile?.saver?.goal_amount)
    
    let progressMath = (currentSaved / saverGoalAmount) * 100
    let percent = parseFloat(progressMath.toFixed(2))

    const resetGoal = () => {
        updateProfile({
            id: profile.saver.id,
            user: profile.saver.user,
            profile_image_url: profile.saver.profile_image_url,
            created_on: profile.saver.created_on,
            goal_amount: 0.00
        })
    }

    if (Number.isNaN(saverGoalAmount) && Number.isNaN(currentSaved) && Number.isNaN(percent)) return null

    return (
        <div className="profileList">
            <div className="headerDiv">
                <img className="ckTitle" alt="Currency Kidz Title" src={Title}></img>
                <h3 className="impact">Welcome {profile.saver?.user.first_name}!!</h3>
            </div>
            <div className="imageDiv">
                <img className="milo image" alt="milo profile picture" src={Milo}></img>
                {saverGoalAmount === 0.00 ?
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
                        <h3 className="impact">You're Goal Progress</h3>
                    </div>
                    <div className="progressBarDiv">
                        <h2>${currentSaved.toFixed(2)}</h2>
                        <div className="progressBar">
                            <ProgressBar className="progress" animated now={45} variant="info" now={percent} label={`${percent}%`} max="100"/>
                        </div>
                        <h2>${saverGoalAmount.toFixed(2)}</h2>
                    </div>    
                    <div>
                        { currentSaved > (saverGoalAmount.toFixed(2) - 0.01) ?
                        <div className="congratsDiv">
                            <img className="congratsPiggyBank" alt="congrats" src={PigCongrats}></img>
                            <div>
                                <button className="button2 goalResetButton" onClick={resetGoal} name="amount">Reset Goal</button>
                            </div>
                        </div>
                        :
                    <Accordion>
                        <Col>
                            <Accordion.Toggle as={Col} variant="link" eventKey="0">
                                <section>
                                    <h2 className="totalMoneyTitle impact">Edit Goal Amount</h2>
                                    <div className="editGoalDiv">
                                        <h6 className="accordionButton down"></h6>
                                        <h6>More</h6>
                                    </div>
                                </section>
                            </Accordion.Toggle>
                        </Col>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="cardBody">
                                <Row>
                                    <Col>
                                        <form>
                                            <fieldset>
                                                <label htmlFor="goalEditInput" className="goalLabel">Change Goal Amount: </label>
                                                <input id="goalEditInput" type="number"
                                                    name="amount" placeholder="0.00"
                                                    required autoFocus
                                                    onChange={handleControlledInputChange}></input>
                                            </fieldset>
                                        </form>
                                        <div>
                                            <button className="button2 goalAmountButton" onClick={handleSaveGoalAmount}>Set Goal</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                    }
                    </div>
                </article>
                }
                <div>
                    <Accordion>
                        <Col>
                            <Accordion.Toggle as={Col} variant="link" eventKey="1">
                                <section className="moneyBreakdownSection">
                                    <h2 className="totalMoneyTitle impact">What's In Your Piggy Bank?</h2>
                                    <div className="moneyBreakdownMoreDiv">
                                        <h7 className="accordionButton down"></h7>
                                        <h7>More</h7>
                                    </div>
                                </section>
                            </Accordion.Toggle>
                        </Col>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="cardBody">
                                <Container className="denomBreakdown">
                                    <Row>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Penny} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountCoins"> = {totalPennies}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Nickel} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountCoins"> = {totalNickels}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Dime} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountCoins"> = {totalDimes}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Quarter} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountCoins"> = {totalQuarters}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="denomMiddleRow">
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Dollar} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountBills"> = {totalDollars}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Five} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountBills"> = {totalFives}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Ten} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountBills"> = {totalTens}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Twenty} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountBills"> = {totalTwenties}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Fifty} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountBills"> = {totalFifties}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="denom">
                                                <Image className="denomImg" alt="coin bill" src={Hundred} />
                                                <div className="denomAmountDiv">
                                                    <h5 className="denomAmount denomAmountBills"> = {totalHundreds}</h5>
                                                </div>
                                            </div>
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
                <h3 className="impact">Start a New Deposit!!</h3>
                <img className="piggyBank image withdrawalPig" alt="piggy bank withdrawal" src={PigMinus}
                    onClick={() => history.push("/create/withdrawal_event")}></img>
                <h3 className="impact">Start a New Withdrawal!!</h3>
            </div>
            <div className="recentActivity">
                <h3 className="underline impact">Your Deposits</h3>
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
                <h3 className="underline impact">Your Withdrawals</h3>
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