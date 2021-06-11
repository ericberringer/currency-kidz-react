import React from "react"
import { Route } from "react-router-dom"
import { ProfileList } from "./profile/ProfileList"
import { ProfileProvider } from "./auth/AuthProvider"


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
            <Route exact path="/">
                <ProfileList />
            </Route>
        </ProfileProvider>

        {/* Deposit Event Area */}
        {/* Withdrawal Event Area */}
        {/* Currency Area */}
        {/* Quiz Area */}
    </>
    )}