import styles from "./ProfileCard.module.css"

const ProfileCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_info}>
        <div className={styles.card_avatar}></div>
        <div className={styles.card_title}>{props.profile.name}</div>
      </div>
    </div>
  )
}

export default ProfileCard