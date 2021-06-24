import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Deposit } from "./Deposit"
import { Withdrawal } from "./Withdrawal"
import PigPlus from "../profile/PigPlus.png"
import PigMinus from "../profile/PigMinus.png"
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
import "./Profile.css"
import { DepositEventContext } from "../deposits/DepositProvider"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export const ProfileList = () => {

    const { getProfile, profile, updateProfile, getProfileById } = useContext(ProfileContext)
    const { getDeposits, deposit_events } = useContext(DepositEventContext)
    const { getWithdrawals, withdrawal_events } = useContext(WithdrawalEventContext)

    const [ currency, setCurrency ] = useState([])

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
                        <h2>${currentSaved.toFixed(2)}</h2>
                        <div className="progressBar">
                            <ProgressBar animated now={45} variant="info" now={percent} label={`${percent}%`} max="100"/>
                        </div>
                        <h2>${saverGoalAmount.toFixed(2)}</h2>
                    </div>      
                </article>
                }
                <div>
                    <Accordion>
                        <Col>
                            <Accordion.Toggle as={Col} variant="link" eventKey="0">
                                <section className="moneyBreakdownSection">
                                    <h2 className="totalMoneyTitle">Your Total Money Breakdown</h2>
                                    <div className="moreButtonDiv">
                                        <h7 className="accordionButton down"></h7>
                                        <h7>More</h7>
                                    </div>
                                </section>
                            </Accordion.Toggle>
                        </Col>
                        <Accordion.Collapse eventKey="0">
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