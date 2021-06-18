import React, {useState} from "react"

export const WithdrawalEventContext = React.createContext()

export const WithdrawalProvider = (props) =>{

    const [withdrawal_events, setWithdrawals] = useState([])

    const getWithdrawals = () => {
      return fetch("http://localhost:8000/withdrawal_events", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
          }
      })
          .then(response => response.json())
          .then(setWithdrawals)
    }

    const createWithdrawal = newDep => {
        return fetch("http://localhost:8000/withdrawal_events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
            },
            body: JSON.stringify(newDep)
        })
            .then(getWithdrawals)
    }

    const updateWithdrawal = withdrawal => {
        return fetch(`http://localhost:8000/withdrawal_events/${withdrawal.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ck_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(withdrawal)
        })
            .then(getWithdrawals)
    }

    const getWithdrawalById = (id) => {
        return fetch(`http://localhost:8000/withdrawal_events/${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
            }
        })
            .then(res => res.json())
    }

    return (
      <WithdrawalEventContext.Provider value={{
          withdrawal_events, getWithdrawals, updateWithdrawal, getWithdrawalById, createWithdrawal
      }}>
          {props.children}
      </WithdrawalEventContext.Provider>
    )
}