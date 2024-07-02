import styles from "../App.module.css";
function Display({ DisplayValue }) {
  return (
    <div>
      <input
        type="text"
        className={styles.display}
        value={DisplayValue}
        readOnly
      />
    </div>
  );
}

export default Display;
