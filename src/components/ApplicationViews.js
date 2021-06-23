import React from "react"
import { Route } from "react-router-dom"
import { ProfileList } from "./profile/ProfileList"
import { ProfileProvider } from "./auth/AuthProvider"
import { DepositProvider } from "./deposits/DepositProvider"
import { WithdrawalProvider } from "./withdrawals/WithdrawalProvider"
import { RecentActivityList } from "./recentactivity/RecentActivityList"
import { DepositList } from "./deposits/DepositList"
import { WithdrawalList } from "./withdrawals/WithdrawalList"
import { LearnList } from "./learn/LearnList"
import { QuizList } from "./quiz/QuizList"


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

                <Route exact path="/recent_activity">
                    <RecentActivityList />
                </Route>

                </WithdrawalProvider>
            </DepositProvider>
        </ProfileProvider>

        {/* Deposit Area */}

        <ProfileProvider>
            <DepositProvider>
                <WithdrawalProvider>

                <Route exact path="/create/deposit_event">
                    <DepositList />
                </Route>

                </WithdrawalProvider>
            </DepositProvider>
        </ProfileProvider>

        {/* Withdrawal Area */}

        <ProfileProvider>
            <DepositProvider>
                <WithdrawalProvider>

                <Route exact path="/create/withdrawal_event">
                    <WithdrawalList />
                </Route>

                </WithdrawalProvider>
            </DepositProvider>
        </ProfileProvider>

        {/* Learn Area */}
        <ProfileProvider>
            <DepositProvider>
                <WithdrawalProvider>

                <Route exact path="/learn">
                    <LearnList />
                </Route>

                </WithdrawalProvider>
            </DepositProvider>
        </ProfileProvider>

        {/* Quiz Area */}

        <ProfileProvider>
            <DepositProvider>
                <WithdrawalProvider>

                <Route exact path="/quiz">
                    <QuizList />
                </Route>

                </WithdrawalProvider>
            </DepositProvider>
        </ProfileProvider>

    </>
    )}