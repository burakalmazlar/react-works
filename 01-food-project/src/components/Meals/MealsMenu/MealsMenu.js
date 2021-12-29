import DUMMY_MEALS from "../../../store/dummy-meals";
import Card from "../../UI/Card";

import classes from "./MealsMenu.module.css";
import MealsMenuItem from "./MealsMenuItem";

const MealsMenu = (props) => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealsMenuItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default MealsMenu;
