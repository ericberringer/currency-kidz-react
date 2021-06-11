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

    return (
      <DepositEventContext.Provider value={{
          deposit_events, getDeposits
      }}>
          {props.children}
      </DepositEventContext.Provider>
    )
}