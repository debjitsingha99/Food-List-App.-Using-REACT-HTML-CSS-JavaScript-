import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Input Food Item here"
      onKeyDown={handleKeyDown}
    ></input>
  );
};

export default FoodInput;
