import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState(3);
  const [result, setResult] = useState([]);
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newResults = [];
    for (let i = 1; i * value < 100; i++) {
      newResults.push(i * value);
    }
    setResult(newResults);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select
          value={value}
          name="number"
          onChange={(e) => handleValueChange(e)}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <ul>
        {result.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </>
  );
};

export default Form;
