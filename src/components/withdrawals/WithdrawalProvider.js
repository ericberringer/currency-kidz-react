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

    return (
      <WithdrawalEventContext.Provider value={{
          withdrawal_events, getWithdrawals
      }}>
          {props.children}
      </WithdrawalEventContext.Provider>
    )
}