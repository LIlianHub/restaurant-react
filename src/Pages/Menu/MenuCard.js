import { MenuCheckBox } from "./MenuCheckBox";

export const MenuCard = ({ menu, foodList, addToCart }) => {

    const menusCheckbox = foodList.filter((food) => food.category === "DESSERT").map((food) => {
        return (
            <MenuCheckBox key={`menu-${menu.id}-food-${food.id}`} menu={menu} food={food} />)
    });
    const mealsCheckbox = foodList.filter((food) => food.menuId === menu.id).map((food) => {
        return (
            <MenuCheckBox key={`menu-${menu.id}-food-${food.id}`} menu={menu} food={food} />)
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
                    <a onClick={data => addToCart(menu)} className="btn btn-primary mx-3">Ajouter à ma commande</a>
                </div>
            </div>
        </div>

    );
};
