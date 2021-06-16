import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ProfileProvider } from "./profile/ProfileProvider"
import 'bootstrap/dist/css/bootstrap.min.css';


export const CurrencyKidz = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("ck_user_id")) {
                return <>
                <ProfileProvider>
                    <NavBar />
                    <ApplicationViews />
                </ProfileProvider>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("ck_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("ck_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Register />
            }
        }} />
    </>
)