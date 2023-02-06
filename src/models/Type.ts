/*Type*/
export type FoodType = {
    id: number;
    title: string;
    name: string;
    description: string;
    price: number;
    image: string;
    idKey?: number;
  };
  
  export type MenuType = {
    id: number;
    title: string;
    name: string;
    description: string;
    price: number;
    image: string;
    idKey?: number;
    meal: FoodType;
    dessert: FoodType;
  };
  
  export type CartType = {
    selectedFoods: FoodType[];
    selectedMenus: MenuType[];
  };