import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

export const Order = () => {
  const [cart, setCart, addMenuToCart, addFoodToCart] = useContext(CartContext);


  const listProduit = cart.selectedFoods.map((food) => {
    return (
      <tr key={`order-food-${food.id}`}>
        <td>{food.title}</td>
        <td>{food.price}€</td>
      </tr>
    );
  });

  const listMenu = cart.selectedMenus.map((menu) => {
    return (
      <tr key={`order-menu-${menu.id}`}>
        <td>{menu.title}</td>
        <td>{menu.price}€</td>
      </tr>
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
    <table class="table">
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

  );
};
