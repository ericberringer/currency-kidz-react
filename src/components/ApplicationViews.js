import React from "react"
import { Route } from "react-router-dom"
import { ProfileList } from "./profile/ProfileList"
import { ProfileProvider } from "./auth/AuthProvider"
import { DepositProvider } from "./deposits/DepositProvider"
import { WithdrawalProvider } from "./withdrawals/WithdrawalProvider"
import { EditDepositForm } from "./recentactivity/EditDepositForm"
import { EditWithdrawalForm } from "./recentactivity/EditWithdrawalForm"
import { RecentActivityList } from "./recentactivity/RecentActivityList"


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

        {/* Recent Activity Area */}

        <ProfileProvider>
            <DepositProvider>
                <WithdrawalProvider>

                <Route exact path="/recent_activity/edit_withdrawal/:withdrawalId(\d+)">
                    <EditWithdrawalForm />
                </Route>

                <Route exact path="/recent_activity/edit_deposit/:depositId(\d+)">
                    <EditDepositForm />
                </Route>

                <Route exact path="/recent_activity">
                    <RecentActivityList />
                </Route>

                </WithdrawalProvider>
            </DepositProvider>
        </ProfileProvider>

        {/* Currency Area */}
        {/* Quiz Area */}
    </>
    )}