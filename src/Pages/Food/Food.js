import { FoodInCategory } from "./FoodInCategory";

export const Food = ({ foodList, addToCart }) => {
  return (
    <>
      <h1 className="text-center">Carte</h1>
      <hr></hr>
      <h2 className="text-center">Plats</h2>
      <div className="d-flex flex-wrap justify-content-center"><FoodInCategory allFood={foodList} filterName={"PLAT"} addToCart={addToCart} /></div>
      <h2 className="text-center">Desserts</h2>
      <div className="d-flex flex-wrap justify-content-center"><FoodInCategory allFood={foodList} filterName={"DESSERT"} addToCart={addToCart} /></div>
      <h2 className="text-center">Boissons</h2>
      <div className="d-flex flex-wrap justify-content-center"><FoodInCategory allFood={foodList} filterName={"BOISSON"} addToCart={addToCart} /></div>
    </>
  );
};
