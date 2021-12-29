import MealsMenu from "./MealsMenu/MealsMenu";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <MealsMenu />
    </>
  );
};

export default Meals;
