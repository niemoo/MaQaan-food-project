import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import SocMedCard from '../components/SocMedCard';
import IgLogo from '../assets/ig.png';
import ShopeeLogo from '../assets/shopee.png';
import GoFoodLogo from '../assets/gofood.png';

const Order = () => {
  return (
    <>
      <div className="p-5 mt-32 rounded-xl flex flex-col justify-center items-center mx-auto">
        <div className="md:ml-5 md:text-left text-center">
          <p className="mt-1 text-3xl font-medium">Order Here !</p>
        </div>
        <div className="mt-6">
          <FontAwesomeIcon class="animate-bounce w-10" icon={faCircleArrowDown} />
        </div>

        <div className="mt-3 grid gap-3 grid-cols-2">
          <SocMedCard image={GoFoodLogo} />
          <SocMedCard className="m-1" image={ShopeeLogo} />
        </div>
      </div>
    </>
  );
};

export default Order;
