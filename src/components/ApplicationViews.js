import React from "react"
import { Route } from "react-router-dom"
import { ProfileList } from "./profile/ProfileList"
import { ProfileProvider } from "./auth/AuthProvider"
import { DepositProvider } from "./deposits/DepositProvider"
import { WithdrawalProvider } from "./withdrawals/WithdrawalProvider"


export const ApplicationViews = () => {
    return (
    <>
        <main
            style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem",
            }}
        ></main>

        {/* Profile Area */}

        <ProfileProvider>
            <DepositProvider>
                <WithdrawalProvider>

                <Route exact path="/">
                    <ProfileList />
                </Route>

                </WithdrawalProvider>
            </DepositProvider>
        </ProfileProvider>

        {/* Deposit Event Area */}
        {/* Withdrawal Event Area */}
        {/* Currency Area */}
        {/* Quiz Area */}
    </>
    )}