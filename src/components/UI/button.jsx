import styles from './button.module.css';

function button() {
  return (
    <button type="button" className={styles.button} aria-label="button">
      <img src="templates\add-button.png" alt="button" />
    </button>
  );
}

export default button;
