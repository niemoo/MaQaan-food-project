import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faDollarSign, faHeadset } from '@fortawesome/free-solid-svg-icons';
import About1 from '../assets/about-1.png';

const AboutOne = () => {
  return (
    <>
      <div className="mx-auto flex flex-wrap mt-10">
        <div className="py-36 w-full md:w-1/2 md:block hidden">
          <img className="mx-auto w-96" src={About1} />
        </div>
        <div className="py-36 px-10 w-full md:w-1/2 text-center">
          <p className="text-3xl font-bold">Why Buy From Us</p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
          <div className="container mx-auto flex-wrap justify-center md:grid md:gap-3 md:grid-cols-3">
            <div className="bg-gray-300 rounded-md py-3 border border-gray-400 shadow w-full m-2">
              <FontAwesomeIcon icon={faShippingFast} />
              <span className="ml-5">Free Shipping</span>
            </div>

            <div className="bg-gray-300 rounded-md py-3 border border-gray-400 shadow w-full m-2">
              <i className="fas fa-dollar-sign"></i>
              <FontAwesomeIcon icon={faDollarSign} />
              <span className="ml-5">Easy Transaction</span>
            </div>
            <div className="bg-gray-300 rounded-md py-3 border border-gray-400 shadow w-full m-2">
              <FontAwesomeIcon icon={faHeadset} />
              <span className="ml-5">24 Hours Service</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOne;
