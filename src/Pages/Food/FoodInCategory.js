import { Card } from "../../Card/Card";

export const FoodInCategory = ({ allFood, filterName, addToCart }) => {


    const foodSorted = allFood.filter((food) => food.category === filterName);
    console.log(foodSorted);


    return (foodSorted.map((food) => {
        return (
            <Card key={`food-${food.id}`} element={food} addToCart={addToCart} />
        );
    }));
};
