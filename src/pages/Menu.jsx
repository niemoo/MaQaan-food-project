import React from 'react';
import MenuCard from '../components/MenuCard';
import Dish1 from '../assets/dish-1.png';
import Dish2 from '../assets/dish-2.png';
import Dish3 from '../assets/dish-3.png';
import Dish4 from '../assets/dish-4.png';
import Dish5 from '../assets/dish-5.png';

const Menu = () => {
  return (
    <>
      <div className="md:mt-16">
        <p className="text-center text-3xl font-bold">Popular Menu</p>

        <div className="container mx-auto flex flex-wrap justify-center">
          <MenuCard image={Dish1} title="Burger Zord" />
          <MenuCard image={Dish2} title="Nugget Sonis" />
          <MenuCard image={Dish3} title="Chicken Pul" />
          <MenuCard image={Dish4} title="Pizza Slic" />
          <MenuCard image={Dish5} title="Choco Cha" />
          <MenuCard image={Dish4} title="Pizza Slic" />
        </div>
      </div>
    </>
  );
};

export default Menu;
