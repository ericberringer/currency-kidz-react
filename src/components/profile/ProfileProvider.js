import React, {useState} from "react"

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) =>{

    const [profile, setProfile] = useState([])

    const getProfile = () => {
      return fetch("https://currency-kidz.herokuapp.com/profile", {
          headers:{
              "Authorization": `Token ${localStorage.getItem("ck_user_id")}`
          }
      })
          .then(response => response.json())
          .then(setProfile)
    }

    const getProfileById = (saverId) => {
        return fetch(`https://currency-kidz.herokuapp.com/profile/${saverId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ck_user_token")}`
            }
        })
        .then(res => res.json())
    }
    

    const updateProfile = saver => {
        console.table(saver)
        return fetch(`https://currency-kidz.herokuapp.com/profile/${saver.id}`, {
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