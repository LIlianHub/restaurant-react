import { MenuCheckBox } from "./MenuCheckBox";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { useState, useEffect } from "react";

export const MenuCard = ({ menu, foodList }) => {

    const [menuOrder, setMenuOrder] = useState({});

    const [addMenuToCart] = useContext(CartContext);

    useEffect(() => {
        setMenuOrder({ id: menu.id, price: menu.price, title: menu.title, meal: undefined, dessert: undefined });
    }, [menu.id, menu.price, menu.title]);


    var disableButton;


    const verifMenu = () => {
        if (menuOrder.meal === undefined || menuOrder.dessert === undefined) {
            disableButton = true;

        } else {
            disableButton = false;
        }
    }

    const setFood = (food) => {
        const modif = { ...menuOrder };
        modif.meal = food;
        setMenuOrder(modif);
    }

    const setDessert = (dessert) => {
        const modif = { ...menuOrder };
        modif.dessert = dessert;
        setMenuOrder(modif);
    }

    verifMenu();

    const menusCheckbox = foodList.filter((food) => food.category === "DESSERT").map((food) => {
        return (
            <MenuCheckBox functionAdd={setDessert} key={`menu-${menu.id}-food-${food.id}`} menu={menu} food={food} />)
    });
    const mealsCheckbox = foodList.filter((food) => food.menuId === menu.id).map((food) => {
        return (
            <MenuCheckBox functionAdd={setFood} key={`menu-${menu.id}-food-${food.id}`} menu={menu} food={food} />)
    });


    return (
        <div className="card w-25 mx-3 mb-4">
            <div className="card-header">
                <h4 className="card-title">{menu.title}</h4>
            </div>
            <div className="card-body d-flex flex-column">
                <div className="flex-grow-1">
                    <h6>Choisir un plat :</h6>
                    <div>{mealsCheckbox}</div>
                </div>
                <div className="mt-3">
                    <h6>Choisir un dessert :</h6>
                    <div>{menusCheckbox}</div>
                </div>
                <div className="d-flex mt-3">
                    <span className="fw-bold">{menu.price}€</span>
                    <button onClick={data => addMenuToCart(menuOrder)} disabled={disableButton} className="btn btn-primary mx-3">Ajouter à ma commande</button>
                </div>
            </div>
        </div>
    );
};
