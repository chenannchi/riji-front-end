import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import styles from "./Profiles.module.css"

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <div className={styles.container}>
      <h1>All Profiles</h1>
      <div className={styles.card_container}>
        {profiles.length ? 
          <>
            {profiles.map(profile =>
              // console.log(profile._id)
              <ProfileCard key={profile._id} profile={profile}/>
            )}
          </>
        :
          <p>No profiles yet</p>
        }
      </div>
    </div>
  )
}
 
export default Profiles