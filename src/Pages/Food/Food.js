import { useState, useEffect } from "react";

export const Food = () => {
  const [foodList, setFoodList] = useState([]);

  fetch("http://cabe0232.odns.fr/webdev-api/food")
    .then((response) => response.json())
    .then((json) => setFoodList(json));

  console.log(foodList);

  const foodItems = foodList.map((food) => {
    return (
      <div key={food.id} className="card w-25 mx-3 mb-4">
        <img src={food.photo} className="card-img-top" alt={food.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title flex-grow-1">{food.title}</h5>
          <p className="card-text flex-grow-1">{food.description}</p>
          <div className="d-flex">
            <span className="fw-bold">{food.price}€</span>
            <a href="#" className="btn btn-primary mx-3">
              Ajouter à ma commande
            </a>
          </div>
        </div>
      </div>
    );
  });

  /*const plats = foodItems.filter((food) => food.category === "PLAT");
  const desserts = foodItems.filter((food) => food.category === "DESSERT");
  const boissons = foodItems.filter((food) => food.category === "BOISSON");*/

  //console.log(plats);

  return (
    /*<>
      <h1 className="text-center">Carte</h1>
      <h2 className="text-center">Plats</h2>
      <div className="d-flex flex-wrap justify-content-center">{plats}</div>
      <h2 className="text-center">Desserts</h2>
      <div className="d-flex flex-wrap justify-content-center">{desserts}</div>
      <h2 className="text-center">Boissons</h2>
      <div className="d-flex flex-wrap justify-content-center">{boissons}</div>
    </>*/
    <div className="d-flex flex-wrap justify-content-center">{foodItems}</div>
  );
};
