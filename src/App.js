import { Header } from "./Header/Header";
import { Home } from "./Pages/Home/Home";
import { Food } from "./Pages/Food/Food";
import { Menu } from "./Pages/Menu/Menu";
import { Order } from "./Pages/Order/Order";
import { CartContext } from "./context/cart-context";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [foodList, setFoodList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [cart, setCart] = useState({ selectedFoods: [], selectedMenus: [] });


  useEffect(() => {
    fetch("http://cabe0232.odns.fr/webdev-api/food")
      .then((response) => response.json())
      .then((json) => setFoodList(json));

    fetch("http://cabe0232.odns.fr/webdev-api/menu")
      .then((response) => response.json())
      .then((json) => setMenuList(json));
  }, []);

  const addMenuToCart = (menu) => {
    const modif = { ...cart };
    menu.idKey = Math.floor((Math.random() * 100000000000));
    //console.log(menu);
    modif.selectedMenus.push(menu);
    setCart(modif);

    //console.log(cart);
  };
  const addFoodToCart = (food) => {
    const modif = { ...cart };
    food.idKey = Math.floor((Math.random() * 100000000000));
    modif.selectedFoods.push(food);
    setCart(modif);

    //console.log(cart);
  };


  return (
    <BrowserRouter>
      <CartContext.Provider value={[cart, setCart, addMenuToCart, addFoodToCart]}>
        <Header />
        <main className="w-75 mx-auto p-5">
          <Routes>
            <Route>
              <Route path="*" element={<Home />} />
              <Route path="food" element={<Food foodList={foodList} />} />
              <Route path="menu" element={<Menu foodList={foodList} menuList={menuList} />} />
              <Route path="order" element={<Order />}/>
            </Route>
          </Routes>
        </main>
      </CartContext.Provider>
    </BrowserRouter>

  );
}




export default App;
