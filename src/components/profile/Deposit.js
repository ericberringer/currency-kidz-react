import React, { useContext } from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"
import { DepositEventContext } from "../deposits/DepositProvider"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export const Deposit = ({deposit}) => {

    const { deleteDeposit } = useContext(DepositEventContext)

    const history = useHistory()
    const urlPath = history.location.pathname
    // saves current location

    const handleDelete = () => {
        deleteDeposit(deposit.id)
    }
    
        
    return (
    <>
<Accordion>
    <Card.Header>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
    <section className="recentActivityCard">
        <div className="recentColumn">
            <h4 className="depWithName">{deposit.name}</h4>
        </div>
        <div className="recentColumn">
            <h4>{new Date (deposit.date).toLocaleDateString()}</h4>
        </div>
        <div className="recentColumn">
            <h4>+${deposit.total}</h4>
        </div>
    </section>
    <div className="moreButtonDiv">
        <h7 className="accordionButton down"></h7>
        <h7>More</h7>
    </div>
    </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Card.Body className="cardBody">
    <div>
    {urlPath === "/recent_activity" ?
    <div className="editDeleteButtonDiv">
        <div className="denomBreakdown">
            <div className="denom">
                Penny: {deposit.currency.penny}
            </div>
            <div className="denom">
                Nickel: {deposit.currency.nickel}
            </div>
            <div className="denom">
                Dime: {deposit.currency.dime}
            </div>
            <div className="denom">
                Quarter: {deposit.currency.quarter}
            </div>
            <div className="denom">
                One Dollar: {deposit.currency.one_dollar}
            </div>
            <div className="denom">
                Five Dollars: {deposit.currency.five_dollars}
            </div>
            <div className="denom">
                Ten Dollars: {deposit.currency.ten_dollars}
            </div>
            <div className="denom">
                Twenty Dollars: {deposit.currency.twenty_dollars}
            </div>
            <div className="denom">
                Fifty Dollars: {deposit.currency.fifty_dollars}
            </div>
            <div className="denom">
                One Hundred Dollars: {deposit.currency.one_hundred_dollars}
            </div>
        </div>
        <button className="editButton button2" onClick={() => history.push(`/recent_activity/edit_deposit/${deposit.id}`)}>Edit</button>
        <button className="deleteButton button2" onClick={handleDelete}>Delete</button>
    </div>
        :
        null
    }
    </div>
    </Card.Body>
    </Accordion.Collapse>
</Accordion>
    </>
        )
}