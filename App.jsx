import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";
function App() {
  const [calVal, setcalVal] = useState("");
  const onbuttonClick = (ButtonText) => {
    if (ButtonText === "C") {
      setcalVal("");
    } else if (ButtonText === "=") {
      const res = eval(calVal);
      setcalVal(res);
    } else {
      const newDisplay = calVal + ButtonText;
      setcalVal(newDisplay);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <Display DisplayValue={calVal}></Display>
        <ButtonContainer onbuttonClick={onbuttonClick}></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
