import { Card } from "../../Card/Card";

export const FoodInCategory = ({ allFood, filterName, addToCart }) => {


    const foodSorted = allFood.filter((food) => food.category === filterName);
    console.log(foodSorted);


    return (foodSorted.map((food) => {
        return (
            <Card element={food} addToCart={addToCart} />
        );
    }));
};
