import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Clubsoda1 from '../../images/clubsoda1.png';
import Clubsoda2 from '../../images/clubsoda2.png';
import Clubsoda3 from '../../images/clubsoda3.png';
import Clubsoda4 from '../../images/clubsoda4.png';

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} dynamicHeight={false} width="220px">
      <div>
        <img style={{ borderRadius: '5px' }} height="400px" src={Clubsoda1} />
      </div>
      <div>
        <img style={{ borderRadius: '5px' }} height="400px" src={Clubsoda2} />
      </div>
      <div>
        <img style={{ borderRadius: '5px' }} height="400px" src={Clubsoda3} />
      </div>
      <div>
        <img style={{ borderRadius: '5px' }} height="400px" src={Clubsoda4} />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
