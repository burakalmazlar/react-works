import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes["header"]}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onCartSwitch={props.onCartSwitch} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Bir masa dolusu lezzetli yemek!" />
      </div>
    </>
  );
};

export default Header;
