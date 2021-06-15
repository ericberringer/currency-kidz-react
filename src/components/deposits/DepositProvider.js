import React, {useState} from "react"

export const DepositEventContext = React.createContext()

export const DepositProvider = (props) =>{

    const [deposit_events, setDeposits] = useState([])

    const getDeposits = () => {
      return fetch("http://localhost:8000/deposit_events", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
          }
      })
          .then(response => response.json())
          .then(setDeposits)
    }

    const updateDeposit = deposit => {
        return fetch(`http://localhost:8000/deposit_events/${deposit.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ck_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deposit)
        })
            .then(getDeposits)
    }

    const getDepositById = (id) => {
        return fetch(`http://localhost:8000/deposit_events/${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
            }
        })
            .then(res => res.json())
    }

    return (
      <DepositEventContext.Provider value={{
          deposit_events, getDeposits, updateDeposit, getDepositById
      }}>
          {props.children}
      </DepositEventContext.Provider>
    )
}