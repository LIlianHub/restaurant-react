import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Commande } from "../Commande/Commande"
import { CartType, MenuType, FoodType } from "../../models/Type";

export const Order = () => {

  const [cart] = useContext<[CartType]>(CartContext);


  const listProduit = cart.selectedFoods.map((food) => {
    return (
      <tr key={`order-food-${food.idKey}`}>
        <td>{food.title}</td>
        <td>{food.price}€</td>
      </tr>
    );
  });

  const listMenu = cart.selectedMenus.map((menu) => {
    return (
      <>
        <tr key={`order-menu-${menu.idKey}`}>
          <td>{menu.title}</td>
          <td>{menu.price}€</td>
        </tr>
        <tr>
          <td><li>{menu.meal.title}</li></td>
          <td></td>
        </tr>
        <tr>
          <td><li>{menu.dessert.title}</li></td>
          <td></td>
        </tr>
      </>
    );
  });

  let total = 0;

  cart.selectedFoods.forEach(element => {
    total += element.price;
  });

  cart.selectedMenus.forEach(element => {
    total += element.price;
  });


  return (
    <>
      <h1 className="text-center">Commande</h1>
      <hr className="mb-2"></hr>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Article</th>
            <th scope="col">Prix</th>
          </tr>
        </thead>
        <tbody>
          {listMenu}
          {listProduit}
        </tbody>
        <thead>
          <tr>
            <th scope="col">Total</th>
            <th scope="col">{total.toFixed(2)}€</th>
          </tr>
        </thead>
      </table>
      <Commande key="user-command" />
    </>
  );
};
