import React, { Component } from 'react';
import Banner from './commponent/index';
import Swiper01 from './commponent/swipers/swiper01';
import Swiper02 from './commponent/swipers/swiper02';
import Swiper03 from './commponent/swipers/swiper03';
import Swiper04 from './commponent/swipers/swiper04';
import Swiper05 from './commponent/swipers/swiper05';
import Swiper06 from './commponent/swipers/swiper06';
import 'animate.css';
export default class index extends Component {
  render() {
    const SwiperS = [
      Swiper01,
      Swiper02,
      Swiper03,
      Swiper04,
      Swiper05,
      Swiper06,
    ];
    return (
      <div>
        <Banner autoplay={true} interval={3000} Banners={SwiperS} />
      </div>
    );
  }
}
