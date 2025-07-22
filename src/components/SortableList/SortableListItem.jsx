import styles from './SortableList.module.css'

const SortableListItem = (userData) => {
  return <div className={`${styles.listItem}`}>
    <div className={`${styles.listItem__userId}`}>{userData.userData.id}</div>
    <div className={`${styles.listItem__userName}`}>{userData.userData.name}</div>
    <div className={`${styles.listItem__userNickname}`}>{userData.userData.username}</div>
    <div className={`${styles.listItem__userEmail}`}>{userData.userData.email}</div>
  </div>
}

export default SortableListItem;