import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '@fontsource/nunito/500.css';
import FoodImage2 from '../assets/home-img-1.png';
import FoodImage3 from '../assets/home-img-2.png';

const Hero = () => {
  return (
    <div className="mx-auto flex flex-wrap">
      <div className="py-36 text-center w-full md:w-1/2">
        <div className="md:mt-44 md:ml-28 md:text-start md:p-0">
          <p className="text-xl font-regular text-slate-700">Your Favorite Restaurant.</p>
          <p className="md:mt-3 text-4xl font-bold text-slate-700">
            Discover, <span className="text-emerald-500">Savor &</span>
          </p>
          <p className="md:ml-28 text-4xl font-bold">
            <span className="text-emerald-500">Relish</span> Authentic Flavors.
          </p>
          {/*<button className="md:ml-28 md:mt-5 p-2 bg-emerald-700 hover:bg-emerald-500 text-white rounded-lg shadow border border-gray-300">Order Here</button>*/}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="md:mt-44 md:block mt-4 mx-auto w-9/12" src={FoodImage2} alt="Food 2" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="md:mt-44 md:block mt-4 mx-auto w-9/12" src={FoodImage3} alt="Food 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
