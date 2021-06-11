import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import Profile from "./Profile"
import "./Profile.css"

export const ProfileList = () => {

    const { getProfile, profile } = useContext(ProfileContext)
    console.log(profile.saver.user.first_name)

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <div className="profileList">
            <h1>PROFILE</h1>
            <h3>Welcome {profile.saver.user.first_name}!!</h3>
        </div>
    )
}