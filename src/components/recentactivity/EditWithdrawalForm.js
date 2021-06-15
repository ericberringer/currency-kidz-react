import { useHistory, useParams } from "react-router-dom"
import { useEffect, useContext, useState, React } from "react"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"
import "./RecentActivity.css"

export const EditWithdrawalForm = () => {

    const { updateWithdrawal, getWithdrawalById } = useContext(WithdrawalEventContext)

    const history = useHistory()
    const { withdrawalId } = useParams()

    const [ event, setEvent ] = useState({
        name: "",
        total: 0
    })

    const handleControlledInputChange = (transaction) => {
        const newEvent = { ...event }
        newEvent[transaction.target.id] = transaction.target.value
        setEvent(newEvent)
    }

    const handleSaveEvent = () => {
        if (event.name === "" && event.total === 0) {
            window.alert("Please complete all fields")
        } else {
            updateWithdrawal({
                id: withdrawalId,
                name: event.name,
                date: event.date,
                total: event.total
            })
                .then(() => history.push("/recent_activity"))
       }
    }

    useEffect(() => {
        if (parseInt(withdrawalId)) {
        getWithdrawalById(withdrawalId)
            .then(event => {
                setEvent({
                    id: event.id,
                    name: event.name,
                    date: event.date,
                    total: event.total
                })
            })
        }
    }, [])

    return (
        <section>
            <form className="transactionForm">
                <h2>Edit Recent Activity</h2>
                <div className="transactionFormDiv">
                    <fieldset>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" required autoFocus
                            placeholder="Transaction Name"
                            onChange={handleControlledInputChange}
                            value={event.name}
                            ></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="total">Amount: $</label>
                        <input type="number" step="0.01" min="0" max="10000" id="total" required autoFocus
                            placeholder="Total"
                            onChange={handleControlledInputChange}
                            value={event.total}
                            ></input>
                    </fieldset>
                    <button className="saveEditButton"
                            onClick={evt => {
                                evt.preventDefault()
                                handleSaveEvent()
                            }}>Save
                    </button>
                    <button className="button cancelButton" onClick={() => history.push("/recent_activity")}>Cancel</button>
                </div>
            </form>
        </section>
    )
}