import { MenuCard } from "./MenuCard";

export const Menu = ({ foodList, menuList }) => {


  const menuCards = menuList.map((menu) => {
    return (
      <MenuCard key={`menu-${menu.id}`} menu={menu} foodList={foodList} />
    );
  });

  //console.log(menuCards);

  return (
    <>
      <h1 className="text-center">Menus</h1>
      <hr className="mb-2"></hr>
      <div className="d-flex flex-wrap justify-content-center">
        {menuCards}
      </div>
    </>);


};


