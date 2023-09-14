import React from 'react';

const ReviewCard = ({ image, person }) => {
  return (
    <>
      <div className="max-w-sm md:flex p-5 m-5 border border-gray-300 shadow rounded-xl">
        <div className="flex justify-center items-center">
          <img className="w-24 rounded-full duration-500" src={image} />
        </div>
        <div className="md:ml-5 md:text-left text-center">
          <p className="text-lg font-medium">{person}</p>
          <p className="mt-1 text-sm">Taste feels so good. Recommend this restaurant.</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
