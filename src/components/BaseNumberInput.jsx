const BaseNumberInput = ({ onChangeBase, num }) => {
  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => onChangeBase(e.target.value)}
      />
    </>
  );
};

export default BaseNumberInput;
