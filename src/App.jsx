import { useState } from "react";
import BaseNumberInput from "./components/BaseNumberInput";

function App() {
  const [decimal, setDecimal] = useState(0);
  const [binary, setBinary] = useState(0);

  const changeToDecimal = (bin) => {
    return parseInt(bin, 2) || 0;
  };
  const decimalChange = (value) => {
    setDecimal(value);
    setBinary(changeToBinary(value));
  };

  const changeToBinary = (dec) => {
    return (dec >>> 0).toString(2);
  };
  const isBinary = (value) => {
    return value.split("").every((el) => el === "0" || el === "1");
  };
  const binaryChange = (value) => {
    if (isBinary(value)) {
      setBinary(value);
      setDecimal(changeToDecimal(value));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <span>Nombre décimal:</span>
      <BaseNumberInput onChangeBase={decimalChange} num={decimal} />
      <span>
        <span>Nombre binaire:</span>
      </span>
      <BaseNumberInput onChangeBase={binaryChange} num={binary} />
    </div>
  );
}

export default App;
