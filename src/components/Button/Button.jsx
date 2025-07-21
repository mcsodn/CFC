import styles from './Button.module.css'; // Импорт CSS-модуля

const Button = (props) => {
  return <input className={`${styles.box} ${styles.red}`} type="button" value={`${props.buttonText}`}></input>;
}

export default Button;