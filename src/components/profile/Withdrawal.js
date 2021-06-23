import React, { useContext } from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"
import Quarter from "./images/Quarter.png"
import Dime from "./images/Dime.png"
import Nickel from "./images/Nickel.png"
import Penny from "./images/Penny.png"
import Dollar from "./images/Dollar.png"
import Five from "./images/Five.jpeg"
import Ten from "./images/Ten.jpeg"
import Twenty from "./images/Twenty.jpeg"
import Fifty from "./images/Fifty.jpeg"
import Hundred from "./images/Hundred.jpeg"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Withdrawal = ({withdrawal}) => {

    const { deleteWithdrawal } = useContext(WithdrawalEventContext)

    const history = useHistory()
    const urlPath = history.location.pathname
    
    const handleDelete = () => {
        deleteWithdrawal(withdrawal.id)
    }

    return (
        <>
        <Accordion>
            <Col>
            <Accordion.Toggle as={Col} variant="link" eventKey="0">
            <section className="recentActivityCard">
                <div className="recentColumn">
                    <h4 className="depWithName">{withdrawal.name}</h4>
                </div>
                <div className="recentColumn">
                    <h4>{new Date (withdrawal.date).toLocaleDateString()}</h4>
                </div>
                <div className="recentColumn">
                    <h4>-${withdrawal.total}</h4>
                </div>
            </section>
            {urlPath === "/recent_activity" ?
            <div className="moreButtonDiv">
                <h7 className="accordionButton down"></h7>
                <h7>More</h7>
            </div>
            :
            null
            }
            </Accordion.Toggle>
            </Col>
            <div>
            {urlPath === "/recent_activity" ?
            <div>
            <Accordion.Collapse eventKey="0">
            <Card.Body className="cardBody">
                <Container className="denomBreakdown">
                    <Row>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Penny} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountCoins"> = {withdrawal.currency.penny}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Nickel} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountCoins"> = {withdrawal.currency.nickel}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Dime} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountCoins"> = {withdrawal.currency.dime}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Quarter} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountCoins"> = {withdrawal.currency.quarter}</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="denomMiddleRow">
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Dollar} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountBills"> = {withdrawal.currency.one_dollar}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Five} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountBills"> = {withdrawal.currency.five_dollars}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Ten} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountBills"> = {withdrawal.currency.ten_dollars}</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Twenty} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountBills"> = {withdrawal.currency.twenty_dollars}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Fifty} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountBills"> = {withdrawal.currency.fifty_dollars}</h5>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denom">
                                <Image className="denomImg" alt="coin bill" src={Hundred} />
                                <div className="denomAmountDiv">
                                    <h5 className="denomAmount denomAmountBills"> = {withdrawal.currency.one_hundred_dollars}</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="editDeleteButtonDiv">
                    <button className="deleteButton button2" onClick={handleDelete}>Delete</button>
                </div>
            </Card.Body>
            </Accordion.Collapse>
            </div>
                :
            null
            }
            </div>
        </Accordion>
        </>
    )
}