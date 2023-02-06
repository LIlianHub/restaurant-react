import { FoodInCategory } from "./FoodInCategory";

export const Food = ({ foodList }) => {
  return (
    <>
      <h1 className="text-center">Carte</h1>
      <hr className="mb-2"></hr>
      <h2 className="text-center">Plats</h2>
      <div className="d-flex flex-wrap justify-content-center"><FoodInCategory allFood={foodList} filterName={"PLAT"} /></div>
      <h2 className="text-center">Desserts</h2>
      <div className="d-flex flex-wrap justify-content-center"><FoodInCategory allFood={foodList} filterName={"DESSERT"} /></div>
      <h2 className="text-center">Boissons</h2>
      <div className="d-flex flex-wrap justify-content-center"><FoodInCategory allFood={foodList} filterName={"BOISSON"} /></div>
    </>
  );
};
