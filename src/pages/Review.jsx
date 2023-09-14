import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ReviewCard from '../components/ReviewCard';
import Person1 from '../assets/pic-1.png';
import Person2 from '../assets/pic-2.png';
import Person3 from '../assets/pic-3.png';
import Person4 from '../assets/pic-4.png';

const Review = () => {
  return (
    <>
      <div className="mt-32">
        <p className="text-center text-3xl font-bold">Review</p>

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
          <SwiperSlide className="flex justify-center items-center">
            <ReviewCard image={Person1} person="John Doe" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <ReviewCard image={Person2} person="Stephanie Chloe" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <ReviewCard image={Person3} person="Bruno Xavier" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <ReviewCard image={Person4} person="Irene Kanzler" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Review;
