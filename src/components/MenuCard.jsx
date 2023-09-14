import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const MenuCard = ({ image, title }) => {
  return (
    <>
      <div className="max-w-sm p-5 m-5 border space-y-3 border-gray-300 shadow rounded-xl">
        <div className="flex justify-center items-center">
          <img src={image} />
        </div>
        <p className="text-center text-xl font-Regular">{title}</p>

        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={solidStar} />
          <FontAwesomeIcon icon={regularStar} />
        </div>

        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula eros nec ipsum tristique, ac cursus odio.</p>
      </div>
    </>
  );
};

export default MenuCard;
