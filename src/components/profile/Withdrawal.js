import React, { useContext } from "react"
import "./Profile.css"
import { useHistory } from "react-router-dom"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

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
    <Card.Header>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
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
        <button className="editButton button2" onClick={() => history.push(`/recent_activity/edit_withdrawal/${withdrawal.id}`)}>Edit</button>
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