import styles from "../App.module.css";

function ButtonContainer({ onbuttonClick }) {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "%",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={styles.buttons_container}>
        {buttonNames.map((button) => (
          <button
            key={button}
            className={styles.button}
            onClick={() => onbuttonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonContainer;
