import { useDispatch, useSelector } from "react-redux";
import { setDenomination } from "../store/action/action-types";

const Settings = () => {
  const denominations = useSelector((state) => state.denominations);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    const selectedDenomination = JSON.parse(value);
    dispatch(setDenomination(selectedDenomination));
  };

  return (
    <>
      <select
        name="denomination"
        onChange={(e) => handleChange(e.target.value)}
      >
        {denominations.map((denomination, index) => (
          <option key={index} value={JSON.stringify(denomination)}>
            {denomination.map((el) => `[ ${el} ]`).join(", ")}
          </option>
        ))}
      </select>
    </>
  );
};

export default Settings;
