import { useHistory, useParams } from "react-router-dom"
import { useEffect, useContext, useState, React } from "react"
import { DepositEventContext } from "../deposits/DepositProvider"

export const EditDepositForm = () => {

    const { updateDeposit, getDepositById, createDeposit } = useContext(DepositEventContext)

    const history = useHistory()
    const { depositId } = useParams()

    const [ event, setEvent ] = useState({
        name: "",
        total: 0,
        date: ""
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
            if (depositId) {
                updateDeposit({
                    id: depositId,
                    name: event.name,
                    date: event.date,
                    total: event.total,
                })
                .then(() => history.push("/recent_activity"))
            } else {
                createDeposit({
                    id: depositId,
                    name: event.name,
                    date: event.date,
                    total: event.total,
                })
                .then(() => history.push("/"))
            }
       }
    }

    useEffect(() => {
        if (parseInt(depositId)) {
        getDepositById(depositId)
            .then(event => {
                setEvent({
                    id: event.id,
                    name: event.name,
                    date: event.date,
                    total: event.total,
                })
            })
        }
    }, [])

    return (
        <section>
            <form className="transactionForm">
                <h2>{depositId ? "Edit Recent Activity" : "Make a Deposit"}</h2>
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