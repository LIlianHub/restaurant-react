import { Header } from "./Header/Header";
import { Home } from "./Pages/Home/Home";
import { Food } from "./Pages/Food/Food";
import { Menu } from "./Pages/Menu/Menu";
import { Order } from "./Pages/Order/Order";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="w-75 mx-auto p-5">
        <Routes>
          <Route>
            <Route path="*" element={<Home />} />
            <Route path="food" element={<Food />} />
            <Route path="menu" element={<Menu />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
