import * as React from 'react';
import './testimonials.css';
const AVTR1 = require('../../assets/avatar1.png');
const AVTR2 = require('../../assets/avatar2.jpg');
const AVTR3 = require('../../assets/avatar3.jpg');
const AVTR4 = require('../../assets/avatar4.jpg');

//-------------------------- SWIPER -------------------------//
//Do 'npm install swiper' on cmd.
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/components/pagination/pagination.css';

//------------------------ OBJECT ARRAY -------------------//
// Array of testimonial objects
interface Testimonial {
  avatar: string;
  name: string;
  review: string;
}

const data: Testimonial[] = [
  {
    avatar: AVTR1,
    name: 'Fiona Reaves',
    review: 'Excellent Tutor.',
  },
  {
    avatar: AVTR2,
    name: 'Fiona Reaves',
    review: 'Excellent Tutor.',
  },
  {
    avatar: AVTR3,
    name: 'Fiona Reaves',
    review: 'Excellent Tutor.',
  },
  {
    avatar: AVTR4,
    name: 'Fiona Reaves',
    review: 'Excellent Tutor.',
  },
];

//------------------------------- FUNCTION FOR TESTIMONIAL ----------------//

const Testimonials: React.FC = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
