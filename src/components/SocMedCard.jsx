import React from 'react';

const SocMedCard = ({ className, image }) => {
  return (
    <>
      <button className="max-w-sm m-2 mx-auto flex flex-wrap justify-center items-center shadow rounded-lg">
        <img className={`w-16 ${className}`} src={image} />
      </button>
    </>
  );
};

export default SocMedCard;
