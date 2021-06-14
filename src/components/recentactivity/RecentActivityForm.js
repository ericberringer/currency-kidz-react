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
                        placeholder="Transaction Name"
                        ></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="total">Amount: </label>
                    <input type="text" id="total" required autoFocus
                        placeholder="Total"
                        ></input>
                </fieldset>
            </form>
        </section>
    )
}