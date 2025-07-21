import styles from './Notification.module.css'; // Импорт CSS-модуля

const Notification = (props) => {
  return <div 
    className={`${styles.notification} ${Object.prototype.hasOwnProperty.call(props, 'type') ? getStyle(props.type) : styles.notification__default}`}>
      <p>{`Тип уведомления: ${Object.prototype.hasOwnProperty.call(props, 'type') ? props.type : 'Default'}`}</p>
  </div>
}

const getStyle = type => {
  switch (type) {
    case 'Warning':
      return styles.notification__warning;
    case 'Success':
      return styles.notification__success;
    case 'Error':
      return styles.notification__error;
    default:
      return styles.notification__default;
  }
}

export default Notification;