import { MenuCard } from "./MenuCard";

export const Menu = ({ foodList, menuList, addToCart }) => {


  const menuCards = menuList.map((menu) => {
    return (
      <MenuCard key={`menu-${menu.id}`} menu={menu} foodList={foodList} addToCart={addToCart} />
    );
  });

  //console.log(menuCards);

  return (<div className="d-flex flex-wrap justify-content-center">
    {menuCards}
  </div>);


};


