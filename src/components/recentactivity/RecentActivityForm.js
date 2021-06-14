import { useHistory } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import { DepositEventContext } from "../deposits/DepositProvider"
import { WithdrawalEventContext } from "../withdrawals/WithdrawalProvider"


export const RecentActivityForm = () => {
    return (
        <section>
            <form>
                <h2>Edit Recent Activity</h2>
                <fieldset>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" required autoFocus
                        placeholder="Deposit Name"
                        ></input>
                </fieldset>
            </form>
        </section>
    )
}