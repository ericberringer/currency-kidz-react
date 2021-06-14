import React from "react"
import { Route } from "react-router-dom"
import { ProfileList } from "./profile/ProfileList"
import { ProfileProvider } from "./auth/AuthProvider"
import { DepositProvider } from "./deposits/DepositProvider"
import { WithdrawalProvider } from "./withdrawals/WithdrawalProvider"
import { RecentActivityForm } from "./recentactivity/RecentActivityForm"
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

                <Route exact path="/recent_activity/edit_withdrawal/:eventId(\d+)">
                    <RecentActivityForm />
                </Route>

                <Route exact path="/recent_activity/edit_deposit/:eventId(\d+)">
                    <RecentActivityForm />
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