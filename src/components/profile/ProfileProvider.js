import React, {useState} from "react"

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) =>{

    const [profile, setProfile] = useState([])

    const getProfile = () => {
      return fetch("http://localhost:8000/profile", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
          }
      })
          .then(response => response.json())
          .then(setProfile)
    }

    const getProfileById = (saverId) => {
        return fetch(`http://localhost:8000/profile/${saverId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ck_user_token")}`
            }
        })
        .then(res => res.json())
    }
    

    const updateProfile = saver => {
        return fetch(`http://localhost:8000/profile/${saver.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
          },
          body: JSON.stringify(saver)
        })
          .then(getProfile)
      }

    return (
      <ProfileContext.Provider value={{
          profile, getProfile, updateProfile, getProfileById
      }}>
          {props.children}
      </ProfileContext.Provider>
  )
}