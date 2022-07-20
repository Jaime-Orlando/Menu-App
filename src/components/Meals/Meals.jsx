import AvailableMeals from "./AvaillableMeals";
import MealsSummary from "./MealsSummary";

const Meals = props => 
{
    return(
        <>
            <MealsSummary/>
            <AvailableMeals/>
        </>
    );
}

export default Meals;